export interface PokemonType {
	name: string;
	url: string;
}

export interface CategoryResponse {
	count: number;
	next: null | string;
	previous: null | string;
	results: PokemonType[];
}

export interface CategoryDetail {
	id: number;
	name: string;
	pokemon: Array<{
		pokemon: {
			name: string;
			url: string;
		};
		slot: number;
	}>;
	past_damage_relations: any[];
	names: Array<{
		language: {
			name: string;
			url: string;
		};
		name: string;
	}>;
	moves: Array<{
		name: string;
		url: string;
	}>;
	move_damage_class: {
		name: string;
		url: string;
	};
	generation: {
		name: string;
		url: string;
	};
	damage_relations: any;
}


export interface PokemonDetailsResponse {
	weight: number;
	height: number;
	base_experience: number;
	types: Array<{
		slot: number;
		type: {
			name: string;
			url: string;
		}
	}>;
	stats: Array<{
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		}
	}>
	abilities: Array<{
		ability: {
			name: string;
			url: string;
		},
		is_hidden: boolean;
		slot: number;
	}>
}