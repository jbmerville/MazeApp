
// Returns the node with type "start".
exports.getStart = grid => {
        return this.getNode("start");
    }

// Returns the node with type "end".
exports.getEnd = grid => {
    return this.getNode("end");
}

// Return the first node with type passed as an argument.
exports.getNode = (grid, type) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j].type === type) return grid[i][j];
        }
    }
    return null;
}

// Makes the nodes of types, given in a array of types, have type "unvisited"
exports.resetNodeOfTypes = async (grid, types) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (types.includes(grid[i][j].type))
                grid[i][j].type = "unvisited";
        }
    }
    return grid;
}

    // Make an async function sleep for time in milliseconds.
exports.sleep = time => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

// Returns a list of all neighbor nodes that are either univisited, the end node or the start node.
exports.getUnvisitedNeighbors = (grid, node, includeEnd) => {
    let neighbors = [];
    let i = node.row;
    let j = node.col;
    let types = ["unvisited", "start", "end"];
    if (i > 0 && types.includes(grid[i - 1][j].type))
        neighbors.push(grid[i - 1][j]);
    if (i < grid.length - 1 &&  types.includes(grid[i + 1][j].type))
        neighbors.push(grid[i + 1][j]);
    if (j > 0 &&  types.includes(grid[i][j - 1].type))
        neighbors.push(grid[i][j - 1]);
    if (j < grid[0].length - 1 &&  types.includes(grid[i][j + 1].type))
        neighbors.push(grid[i][j + 1]);
    for (let neighbor of neighbors){
        if (!includeEnd && neighbor.type === "end") this.removeFromArray(neighbors, neighbor);
    }
    return neighbors;
}

exports.clearAroundNode = async (grid, node) => {
    let i  = node.row;
    let j =  node.col;
    if (i > 0) grid[i - 1][j].type = "unvisited";
    if (j > 0) grid[i][j - 1].type = "unvisited";
    if (i < grid.length - 1) grid[i + 1][j].type = "unvisited";
    if (j < grid[0].length - 1) grid[i][j + 1].type = "unvisited";
    return grid;
}

exports.removeFromArray = (array, element) => {
    for (let i = array.length; i >= 0; i--) {
        if (array[i] === element) {
            array.splice(i, 1);
        }
    }
};

exports.randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// returns an educated guess for the distance between 2 nodes
exports.heuristic = (a, b) => {
    let ver = Math.abs(a.col - b.col);
    let hor = Math.abs(a.row - b.row);
    return Math.sqrt(hor * hor + ver * ver);
}

