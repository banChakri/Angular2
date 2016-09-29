import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector: 'authors',
	template: 
		`
			<h2>Author</h2>
			{{title}}
			<ul>
				<li *ngFor="#author of authors">	
					{{ author }}
				</li>
			</ul>
		`,
	providers: [AuthorService]
})


export class AuthorsComponent {
	title: string = "The title of author page";
	authors: Array<string>;
	
	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}
}