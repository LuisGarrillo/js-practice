const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

const buildGraph = function(edges) {
    let graph = new Map();
    function addEdge(from, to) {
        if (from in graph) {
            graph[from].push(to);
        }
        else {
            graph[from] = [to];
        }
    }

    for(let [from, to] of edges.map(s => s.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

let roadGraph = buildGraph(roads);

class Robot {
    constructor(location, parcels) {
        this.location = location;
        this.parcels = parcels;
    }

    move(destination) {
        if (destination in roadGraph[this.location]) {
            this.location = destination;
            return true;
        }
        else {
            /*
            let lookingLocation = this.location
            let counter = 0;
            let looking = true;
            do {
                for (location of roadGraph[lookingLocation]) {
                    if (destination in roadGraph[location]) {
                        this.location = destination;
                        looking = false;
                    }
                }

                if (looking) {
                    lookingLocation = roadGraph[this.location][counter];
                    counter++;
                }

            } while(looking);
            */
        }
    }
}


