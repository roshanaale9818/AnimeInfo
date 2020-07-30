import { Anime } from './anime';
export class Response {
    last_page:number;
    request_cache_expiry:number;
    request_cached:boolean;
    request_hash:string;
    results:Anime[]
}
