from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    """
    Parse pipeline to count nodes, edges, and check if it's a DAG.
    
    Expected JSON format:
    {
        "nodes": [{"id": "node1", ...}, ...],
        "edges": [{"source": "node1", "target": "node2", ...}, ...]
    }
    """
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list from edges
    graph = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in graph:
            graph[source].append(target)
        else:
            graph[source] = [target]

    # Check if the graph is a DAG using DFS cycle detection
    def is_dag_check():
        visited = set()
        rec_stack = set()

        def dfs(node):
            visited.add(node)
            rec_stack.add(node)
            
            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    if dfs(neighbor):
                        return True
                elif neighbor in rec_stack:
                    # Found a back edge (cycle)
                    return True
            
            rec_stack.remove(node)
            return False

        # Check all nodes
        for node_id in graph:
            if node_id not in visited:
                if dfs(node_id):
                    return False  # Cycle found
        
        return True  # No cycles, it's a DAG

    is_dag = is_dag_check()

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
