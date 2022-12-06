export interface Image {
    height: number;
    width: number;
    url: string;
}

export interface PlaylistImage extends Image {

}

export interface Artist {
    external_urls: any;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface NewRelease {
    albums: {
        href: string;
        items: Playlist[];
        limit: number;
        next: string;
        offset: number;
        previous: any;
        total: number;
    }
}

export interface Playlist {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}