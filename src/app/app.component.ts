import { Component, OnInit, ViewEncapsulation }
	from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [MessageService],
})
export class AppComponent {
	data1: TreeNode[] | undefined;
	selectedNode: TreeNode | undefined;

	constructor(private messageService: MessageService) { }

	ngOnInit() {
		this.data1 = [
			{
				label: 'Data Structures and Algorithms',
				expanded: true,
				children: [
					{
						label: 'Data Structures',
						expanded: true,
						children: [
							{
								label: 'Queue',
							},
							{
								label: 'Red-Black Tree',
							},
						],
					},
					{
						label: 'Algorithms',
						expanded: true,
						children: [
							{
								label: 'Hashing',
							},
							{
								label: 'Divide and Conquer',
							},
						],
					},
				],
			},
		];
	}
}
