document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("circle-container");
  const nodeRadius = 25; // Assuming each node has a radius of 25px
  let selectedNodes = new Set(); // To track selected nodes
  let intermediaryConnections = [];

  const nodes = [
    {
      id: 2,
      name: "N1",
      position: { x: 1150, y: 1825 },
      connections: { 3: 1, 26: 4 },
    },
    {
      id: 3,
      name: "N2",
      position: { x: 1150, y: 1750 },
      connections: { 4: 2, 2: 1 },
    },
    {
      id: 4,
      name: "N3",
      position: { x: 1150, y: 1675 },
      connections: { 5: 3, 3: 3 },
    },
    {
      id: 5,
      name: "N4",
      position: { x: 1150, y: 1600 },
      connections: { 6: 1, 4: 3 },
    },
    {
      id: 6,
      name: "N5",
      position: { x: 1150, y: 1525 },
      connections: { 7: 2, 5: 1 },
    },
    {
      id: 7,
      name: "N7",
      position: { x: 1150, y: 1450 },
      connections: { 8: 2, 6: 2 },
    },
    {
      id: 8,
      name: "N8",
      position: { x: 1150, y: 1375 },
      connections: { 9: 3, 7: 2, 74: 1 },
    },
    {
      id: 9,
      name: "N9",
      position: { x: 1150, y: 1300 },
      connections: { 10: 2, 8: 3, 75: 1 },
    },
    {
      id: 10,
      name: "N10",
      position: { x: 1150, y: 1225 },
      connections: { 11: 1, 9: 2 },
    },
    {
      id: 11,
      name: "N11",
      position: { x: 1150, y: 1150 },
      connections: { 12: 2, 10: 1 },
    },
    {
      id: 12,
      name: "N12",
      position: { x: 1150, y: 1075 },
      connections: { 13: 1, 11: 2 },
    },
    {
      id: 13,
      name: "N13",
      position: { x: 1150, y: 1000 },
      connections: { 14: 2, 12: 1 },
    },
    {
      id: 14,
      name: "N14",
      position: { x: 1150, y: 925 },
      connections: { 15: 3, 13: 2 },
    },
    {
      id: 15,
      name: "N15",
      position: { x: 1150, y: 850 },
      connections: { 16: 2, 14: 2 },
    },
    {
      id: 16,
      name: "N16",
      position: { x: 1150, y: 775 },
      connections: { 17: 1, 15: 2 },
    },
    {
      id: 17,
      name: "N17",
      position: { x: 1150, y: 700 },
      connections: { 18: 2, 16: 1 },
    },
    {
      id: 18,
      name: "N18",
      position: { x: 1225, y: 625 },
      connections: { 19: 2, 17: 2 },
    },
    {
      id: 19,
      name: "N19",
      position: { x: 1300, y: 550 },
      connections: { 20: 2, 18: 2 },
    },
    {
      id: 20,
      name: "N20",
      position: { x: 1375, y: 475 },
      connections: { 21: 2, 19: 2 },
    },
    {
      id: 21,
      name: "N21",
      position: { x: 1450, y: 400 },
      connections: { 22: 2, 20: 2 },
    },
    {
      id: 22,
      name: "N22",
      position: { x: 1525, y: 325 },
      connections: { 23: 2, 21: 2 },
    },
    {
      id: 23,
      name: "N23",
      position: { x: 1600, y: 250 },
      connections: { 24: 2, 22: 2 },
    },
    {
      id: 24,
      name: "N24",
      position: { x: 1675, y: 250 },
      connections: { 23: 2 },
    },
    {
      id: 25,
      name: "W1",
      position: { x: 1050, y: 1900 },
      connections: { 26: 2 },
    },
    {
      id: 26,
      name: "CEN",
      position: { x: 1150, y: 1900 },
      connections: { 27: 2, 25: 2, 2: 4, 39: 1 },
    },
    {
      id: 27,
      name: "S1",
      position: { x: 1250, y: 1975 },
      connections: { 28: 2, 26: 2 },
    },
    {
      id: 28,
      name: "S2",
      position: { x: 1250, y: 2050 },
      connections: { 29: 2, 27: 2, 87: 1 },
    },
    {
      id: 29,
      name: "S3",
      position: { x: 1250, y: 2125 },
      connections: { 30: 1, 28: 2 },
    },
    {
      id: 30,
      name: "S4",
      position: { x: 1175, y: 2200 },
      connections: { 31: 1, 29: 1 },
    },
    {
      id: 31,
      name: "S5",
      position: { x: 1100, y: 2275 },
      connections: { 32: 2, 30: 1 },
    },
    {
      id: 32,
      name: "S6",
      position: { x: 1025, y: 2350 },
      connections: { 33: 3, 31: 2 },
    },
    {
      id: 33,
      name: "S7",
      position: { x: 950, y: 2425 },
      connections: { 34: 2, 32: 3 },
    },
    {
      id: 34,
      name: "S8",
      position: { x: 875, y: 2425 },
      connections: { 35: 2, 33: 2 },
    },
    {
      id: 35,
      name: "S9",
      position: { x: 800, y: 2425 },
      connections: { 36: 2, 34: 2 },
    },
    {
      id: 36,
      name: "S10",
      position: { x: 725, y: 2425 },
      connections: { 37: 2, 35: 2 },
    },
    {
      id: 37,
      name: "S11",
      position: { x: 650, y: 2350 },
      connections: { 38: 2, 36: 2 },
    },
    {
      id: 38,
      name: "S12",
      position: { x: 575, y: 2275 },
      connections: { 37: 2, 95: 1 },
    },
    {
      id: 39,
      name: "E1",
      position: { x: 1225, y: 1900 },
      connections: { 40: 2, 26: 1 },
    },
    {
      id: 40,
      name: "E2",
      position: { x: 1300, y: 1900 },
      connections: { 41: 2, 39: 2 },
    },
    {
      id: 41,
      name: "E3",
      position: { x: 1375, y: 1900 },
      connections: { 42: 1, 40: 2 },
    },
    {
      id: 42,
      name: "E4",
      position: { x: 1450, y: 1900 },
      connections: { 43: 2, 41: 1, 83: 1 },
    },
    {
      id: 43,
      name: "E5",
      position: { x: 1525, y: 1900 },
      connections: { 44: 2, 42: 2 },
    },
    {
      id: 44,
      name: "E6",
      position: { x: 1600, y: 1900 },
      connections: { 45: 2, 43: 2 },
    },
    {
      id: 45,
      name: "E7",
      position: { x: 1675, y: 1975 },
      connections: { 46: 1, 44: 2 },
    },
    {
      id: 46,
      name: "E8",
      position: { x: 1750, y: 2025 },
      connections: { 47: 3, 45: 1 },
    },
    {
      id: 47,
      name: "E9",
      position: { x: 1825, y: 2100 },
      connections: { 48: 1, 46: 3 },
    },
    {
      id: 48,
      name: "E10",
      position: { x: 1900, y: 2175 },
      connections: { 49: 2, 47: 1 },
    },

    {
      id: 49,
      name: "E11",
      position: { x: 1900, y: 2250 },
      connections: { 48: 2, 50: 2 },
    },

    {
      id: 50,
      name: "E12",
      position: { x: 1900, y: 2325 },
      connections: { 49: 2, 51: 2 },
    },

    {
      id: 51,
      name: "E13",
      position: { x: 1900, y: 2400 },
      connections: { 50: 2, 52: 2 },
    },
    {
      id: 52,
      name: "E14",
      position: { x: 1900, y: 2475 },
      connections: { 51: 2, 53: 2 },
    },
    {
      id: 53,
      name: "E15",
      position: { x: 1900, y: 2550 },
      connections: { 52: 2, 54: 2 },
    },
    {
      id: 54,
      name: "E16",
      position: { x: 1900, y: 2625 },
      connections: { 53: 2, 55: 3 },
    },
    {
      id: 55,
      name: "E17",
      position: { x: 1900, y: 2700 },
      connections: { 54: 3, 56: 2 },
    },
    {
      id: 56,
      name: "E18",
      position: { x: 1900, y: 2775 },
      connections: { 55: 2, 57: 2 },
    },
    {
      id: 57,
      name: "E19",
      position: { x: 1900, y: 2850 },
      connections: { 56: 2, 58: 3 },
    },
    {
      id: 58,
      name: "E20",
      position: { x: 1900, y: 2925 },
      connections: { 57: 3, 59: 2 },
    },
    {
      id: 59,
      name: "E21",
      position: { x: 1900, y: 3000 },
      connections: { 58: 2, 60: 1 },
    },
    {
      id: 60,
      name: "E22",
      position: { x: 1900, y: 3075 },
      connections: { 59: 1, 61: 2 },
    },
    {
      id: 61,
      name: "E23",
      position: { x: 1900, y: 3150 },
      connections: { 60: 2 },
    },
    {
      id: 62,
      name: "BL01",
      position: { x: 725, y: 2220 },
      connections: { 63: 1, 93: 2, 94: 2 },
    },
    {
      id: 63,
      name: "BL02",
      position: { x: 725, y: 2100 },
      connections: { 62: 1, 64: 2 },
    },
    {
      id: 64,
      name: "BL03",
      position: { x: 725, y: 2025 },
      connections: { 63: 2, 65: 1 },
    },
    {
      id: 65,
      name: "BL04",
      position: { x: 725, y: 1950 },
      connections: { 64: 1, 66: 3 },
    },
    {
      id: 66,
      name: "BL05",
      position: { x: 725, y: 1875 },
      connections: { 65: 3, 67: 1 },
    },
    {
      id: 67,
      name: "BL06",
      position: { x: 725, y: 1800 },
      connections: { 66: 1, 68: 2 },
    },
    {
      id: 68,
      name: "BL07",
      position: { x: 755, y: 1700 },
      connections: { 67: 2, 69: 1 },
    },
    {
      id: 69,
      name: "BL08",
      position: { x: 785, y: 1625 },
      connections: { 68: 1, 70: 2 },
    },
    {
      id: 70,
      name: "BL09",
      position: { x: 825, y: 1550 },
      connections: { 69: 2, 71: 1 },
    },

    {
      id: 71,
      name: "BL10",
      position: { x: 875, y: 1475 },
      connections: { 70: 1, 72: 2 },
    },
    {
      id: 72,
      name: "BL11",
      position: { x: 950, y: 1475 },
      connections: { 71: 2, 73: 2 },
    },
    {
      id: 73,
      name: "BL12",
      position: { x: 1025, y: 1475 },
      connections: { 72: 2, 74: 1 },
    },
    {
      id: 74,
      name: "BL13",
      position: { x: 1100, y: 1375 },
      connections: { 73: 2, 75: 1, 8: 1 },
    },
    {
      id: 75,
      name: "BL14",
      position: { x: 1100, y: 1300 },
      connections: { 74: 2, 76: 2, 9: 1 },
    },
    {
      id: 76,
      name: "BL15",
      position: { x: 1275, y: 1300 },
      connections: { 75: 2, 77: 1 },
    },
    {
      id: 77,
      name: "BL16",
      position: { x: 1325, y: 1360 },
      connections: { 76: 1, 78: 1 },
    },
    {
      id: 78,
      name: "BL17",
      position: { x: 1375, y: 1420 },
      connections: { 77: 1, 79: 2 },
    },
    {
      id: 79,
      name: "BL18",
      position: { x: 1425, y: 1480 },
      connections: { 78: 2, 80: 2 },
    },
    {
      id: 80,
      name: "BL19",
      position: { x: 1490, y: 1560 },
      connections: { 79: 2, 81: 1 },
    },
    {
      id: 81,
      name: "BL20",
      position: { x: 1490, y: 1690 },
      connections: { 80: 1, 82: 1 },
    },
    {
      id: 82,
      name: "BL21",
      position: { x: 1490, y: 1780 },
      connections: { 81: 1, 83: 2 },
    },
    {
      id: 83,
      name: "BL22",
      position: { x: 1490, y: 1950 },
      connections: { 82: 2, 84: 2, 42: 1 },
    },
    {
      id: 84,
      name: "BL23",
      position: { x: 1490, y: 2025 },
      connections: { 83: 2, 85: 2 },
    },
    {
      id: 85,
      name: "BL24",
      position: { x: 1415, y: 2025 },
      connections: { 84: 2, 86: 1 },
    },
    {
      id: 86,
      name: "BL25",
      position: { x: 1340, y: 2025 },
      connections: { 85: 1, 87: 1 },
    },
    {
      id: 87,
      name: "BL26",
      position: { x: 1175, y: 2025 },
      connections: { 86: 1, 88: 1, 28: 1 },
    },
    {
      id: 88,
      name: "BL27",
      position: { x: 1100, y: 2025 },
      connections: { 87: 1, 89: 2 },
    },
    {
      id: 89,
      name: "BL28",
      position: { x: 1025, y: 2025 },
      connections: { 88: 2, 90: 1 },
    },
    {
      id: 90,
      name: "BL29",
      position: { x: 950, y: 2025 },
      connections: { 89: 1, 91: 1 },
    },
    {
      id: 91,
      name: "BL30",
      position: { x: 875, y: 2025 },
      connections: { 90: 1, 92: 1 },
    },
    {
      id: 92,
      name: "BL31",
      position: { x: 840, y: 2120 },
      connections: { 91: 1, 93: 2 },
    },
    {
      id: 93,
      name: "BL32",
      position: { x: 800, y: 2220 },
      connections: { 92: 2, 62: 2 },
    },
    {
      id: 94,
      name: "BL33",
      position: { x: 650, y: 2220 },
      connections: { 62: 2, 95: 1 },
    },
    {
      id: 95,
      name: "BL34",
      position: { x: 575, y: 2220 },
      connections: { 94: 1, 96: 1, 38: 1 },
    },
    {
      id: 96,
      name: "BL35",
      position: { x: 500, y: 2220 },
      connections: { 95: 1, 97: 1 },
    },
    {
      id: 97,
      name: "BL36",
      position: { x: 425, y: 2220 },
      connections: { 96: 1, 98: 1 },
    },
    {
      id: 98,
      name: "BL37",
      position: { x: 350, y: 2220 },
      connections: { 97: 1, 99: 1 },
    },
    {
      id: 99,
      name: "BL38",
      position: { x: 275, y: 2220 },
      connections: { 98: 1 },
    },

    // ... (more nodes as needed)
  ];

  // Function to create a node
  function createNode(node) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "circle-node";
    nodeDiv.id = `node-${node.id}`; // Assign an ID to each node
    nodeDiv.style.left = `${node.position.x}px`;
    nodeDiv.style.top = `${node.position.y}px`;
    nodeDiv.textContent = node.name;
    container.appendChild(nodeDiv);

    // Click event listener for node
    nodeDiv.addEventListener("click", function () {
      if (selectedNodes.has(node.id)) {
        selectedNodes.delete(node.id);
        nodeDiv.style.backgroundColor = "blue";
      } else {
        if (selectedNodes.size < 2) {
          selectedNodes.add(node.id);
          nodeDiv.style.backgroundColor = "red";
        }
      }
      updateIntermediaryConnections();
      updateConnectionColors();
    });

    return nodeDiv;
  }

  // Function to create a connection
  function createConnection(fromNode, toNodeId, distance) {
    const toNode = nodes.find((n) => n.id === parseInt(toNodeId));
    if (!toNode) return; // Skip if no matching node is found

    const line = document.createElement("div");
    line.className = "connection-line";
    line.id = `connection-${fromNode.id}-${toNodeId}`;

    // Calculate the angle and position of the line
    const x1 = fromNode.position.x + nodeRadius;
    const y1 = fromNode.position.y + nodeRadius;
    const x2 = toNode.position.x + nodeRadius;
    const y2 = toNode.position.y + nodeRadius;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const startX = x1 + nodeRadius * Math.cos(angle);
    const startY = y1 + nodeRadius * Math.sin(angle);
    const endX = x2 - nodeRadius * Math.cos(angle);
    const endY = y2 - nodeRadius * Math.sin(angle);
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    line.style.width = `${length}px`;
    line.style.transform = `rotate(${(angle * 180) / Math.PI}deg)`;
    line.style.top = `${startY}px`;
    line.style.left = `${startX}px`;

    container.appendChild(line);
  }

  class PriorityQueue {
    constructor(comparator) {
      this.comparator = comparator || ((a, b) => a - b);
      this.heap = [];
    }

    enqueue(element) {
      this.heap.push(element);
      this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
      if (this.heap.length === 0) return null;

      const element = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.sinkDown(0);
      return element;
    }

    isEmpty() {
      return this.heap.length === 0;
    }

    bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      const current = this.heap[index];

      if (parentIndex < 0 || this.comparator(parent, current) <= 0) return;

      this.heap[parentIndex] = current;
      this.heap[index] = parent;
      this.bubbleUp(parentIndex);
    }

    sinkDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      let smallestChildIndex = index;
      if (
        leftChildIndex < this.heap.length &&
        this.comparator(
          this.heap[leftChildIndex],
          this.heap[smallestChildIndex]
        ) < 0
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(
          this.heap[rightChildIndex],
          this.heap[smallestChildIndex]
        ) < 0
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex !== index) {
        const temp = this.heap[smallestChildIndex];
        this.heap[smallestChildIndex] = this.heap[index];
        this.heap[index] = temp;

        this.sinkDown(smallestChildIndex);
      }
    }
  }

  function findPath(currentNodeId, targetNodeId, visited, path) {
    const distanceMap = {}; // Map to store tentative distances from source
    const unvisitedNodes = new PriorityQueue(
      (a, b) => distanceMap[a.id] - distanceMap[b.id]
    );

    // Initialize distances
    for (const node of nodes) {
      distanceMap[node.id] = Infinity;
    }
    distanceMap[currentNodeId] = 0; // Set source's distance to 0

    // Add starting node to the priority queue
    unvisitedNodes.enqueue({ id: currentNodeId });

    while (!unvisitedNodes.isEmpty()) {
      // Get the node with the smallest tentative distance
      const currentNode = unvisitedNodes.dequeue();
      if (currentNode.id === targetNodeId) {
        // Target node reached; reconstruct the path
        path.push(currentNode.id);
        let previousNode = currentNode.previous;
        while (previousNode) {
          path.push(previousNode.id);
          previousNode = previousNode.previous;
        }
        path.reverse(); // Reverse the path for correct order
        return path;
      }

      // Mark current node as visited
      visited.push(currentNode.id);

      // Explore neighbors of the current node
      const currentNodeData = nodes.find((node) => node.id === currentNode.id);
      for (const neighborId in currentNodeData.connections) {
        const neighborDistance = currentNodeData.connections[neighborId];
        const tentativeDistance =
          distanceMap[currentNode.id] + neighborDistance;

        if (
          !visited.includes(parseInt(neighborId)) &&
          tentativeDistance < distanceMap[parseInt(neighborId)]
        ) {
          // Update tentative distance for neighbor
          distanceMap[parseInt(neighborId)] = tentativeDistance;

          // Add neighbor to the priority queue
          unvisitedNodes.enqueue({
            id: parseInt(neighborId),
            previous: currentNode,
          });
        }
      }
    }

    // No path found
    return null;
  }

  function updateIntermediaryConnections() {
    let pathString = ""; // String to hold the path names
    if (selectedNodes.size === 2) {
      const [startNodeId, endNodeId] = [...selectedNodes];
      const path = findPath(startNodeId, endNodeId, [], []);

      if (path && path.length > 1) {
        // Map the path IDs to their corresponding names
        pathString = path
          .map((id) => nodes.find((node) => node.id === id).name)
          .join(" -> ");
        document.getElementById("intermediary-nodes").textContent =
          "Intermediary Nodes: " + pathString;
      } else {
        document.getElementById("intermediary-nodes").textContent =
          "No intermediary nodes for the selected nodes.";
      }
    } else {
      document.getElementById("intermediary-nodes").textContent =
        "Intermediary Nodes: None";
    }
  }

  // Function to update connection colors based on node selection
  function updateConnectionColors() {
    // Reset all connection colors to black
    document.querySelectorAll(".connection-line").forEach((line) => {
      line.style.backgroundColor = "black";
    });

    if (selectedNodes.size === 2) {
      // Check if exactly two nodes are selected
      let totalDistance = 0; // Variable to hold the total distance
      const [startNodeId, endNodeId] = [...selectedNodes];
      const path = findPath(startNodeId, endNodeId, [], []);

      if (path && path.length > 1) {
        for (let i = 0; i < path.length - 1; i++) {
          const fromNode = path[i];
          const toNode = path[i + 1];
          const line =
            document.getElementById(`connection-${fromNode}-${toNode}`) ||
            document.getElementById(`connection-${toNode}-${fromNode}`);
          if (line) {
            line.style.backgroundColor = "red";
          }
          // Summing the distances
          const fromNodeData = nodes.find((node) => node.id === fromNode);
          totalDistance += fromNodeData.connections[toNode];
        }

        // Print the total distance
        document.getElementById("total-distance").textContent =
          "เวลาที่ใช้: " + totalDistance + " นาที";
      } else {
        document.getElementById("total-distance").textContent =
          "เวลาที่ใช้: 0 นาที";
      }
    } else {
      document.getElementById("total-distance").textContent =
        "เวลาที่ใช้: 0 นาที";
    }
    // Other code remains the same
  }

  // Create nodes and connections
  nodes.forEach((node) => {
    createNode(node);
    Object.entries(node.connections).forEach(([toNodeId, distance]) => {
      createConnection(node, toNodeId, distance);
    });
  });
});
