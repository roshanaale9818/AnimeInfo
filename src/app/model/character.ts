import { VoiceActor } from './voice-actor';
import { Staff } from './staff.';
export class Character {
    mal_id:number;
    image_url:string;
    name:string;
    role:string;
    characters:[];
    voice_actors:VoiceActor[];
    staff:Staff[];
}
