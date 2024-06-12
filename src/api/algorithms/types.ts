// point
export type Point = {
    x: number,
    y: number
}

// cluster
export type Cluster = Point[]

// cluster centres
export type Clustering = {
    clusters: Cluster[],
    cluster_centres: Point[]
}
