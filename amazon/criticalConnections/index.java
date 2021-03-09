Critical Connections in a Network
class Solution {
  public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
    
    final List<List<Integer>> results = new ArrayList<>();
     // build an list that holds the neighbor lists created from the input list
    final List<List<Integer>> nodesList = buildNodeList(n, connections);
    // for each connection, conduct a DFS and assume you have removed one connection from the graph
    for (List<Integer> edge : connections) {
      final int numberOfNodesInGraph = DFS(nodesList, 0, edge, new HashSet<>());
      // if the number of nodes visited equals n - the connection we removed was not critical
      // the connection is critical if the number of nodes visited are less than n
      if (numberOfNodesInGraph != n) {
        results.add(edge);
      }
    }
    return results;
  }
  // DFS method to count the nodes in the graph given a "removed" connection
  public int DFS(List<List<Integer>> nodes, int node, List<Integer> removedEdge, Set<Integer> seen) {
    // if you've already seen the node - return
    if (seen.contains(node)) {
      return 0;
    }
    seen.add(node);
    int count = 1;
    // traverse through the current node's neighbors
    for (int neighbor : nodes.get(node)) {
      // don't traverse the removed connection
      if (!isRemovedEdge(node, neighbor, removedEdge)) {
        count += DFS(nodes, neighbor, removedEdge, seen);
      }
    }
    return count;
  }
  // helper to create an list that holds Graph nodes
  public List<List<Integer>> buildNodeList(int n, List<List<Integer>> connections) {
    final List<List<Integer>> list = new ArrayList<>();
    for (int i = 0; i < n; i++) {
      list.add(new ArrayList<>());
    }
    for (List<Integer> edge : connections) {
      list.get(edge.get(0)).add(edge.get(1));
      list.get(edge.get(1)).add(edge.get(0));
    }
    return list;
  }
  // helper to check if a node and neighbor make up the removed edge
  public boolean isRemovedEdge(int nodeOne, int nodeTwo, List<Integer> removedEdge) {
    return (nodeOne == removedEdge.get(0) && nodeTwo == removedEdge.get(1))
      || (nodeTwo == removedEdge.get(0) && nodeOne == removedEdge.get(1));
  }
}