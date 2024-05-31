let eventGuid = 1;

export const INITIAL_EVENTS = async() => {
   let results = await fetch('http://localhost:5050/users/').then(resp => resp.json());
   return results;
}

export function createEventId() {
   return String(eventGuid++);
}