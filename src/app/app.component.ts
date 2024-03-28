import { Component, OnInit, ViewEncapsulation }
	from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	// providers: [MessageService],
})
export class AppComponent {

  selectedNodes!: TreeNode[];
  selectedNode: TreeNode | null = null;


  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: 'myClass',
      data: {
        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: 'myClass',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Anna Fali',
            title: 'CMO'
          },
          children: [
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
          ]
        },
        {
          expanded: false,
          type: 'person',
          styleClass: 'myClass',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO'
          },
          children: [
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
          ]
        },
        {
          expanded: false,
          type: 'person',
          styleClass: 'myClass',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO'
          },
          children: [
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
            {
              expanded: false,
              type: 'person',
              styleClass: 'myClass',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
              }
            },
          ]

        },

      ]
    }
  ];

  constructor() {
    this.truncateNames(this.data);
  }

  truncateNames(nodes: TreeNode[]): void {
    const maxLength = 10;
    nodes.forEach(node => {
      if (node.data && node.data.name && node.data.name.length > maxLength) {
        node.data.name = node.data.name.substring(0, maxLength) + '...';
      }
      if (node.children) {
        this.truncateNames(node.children);
      }
    });
  }
  showOverlay(node: TreeNode): void {
    this.selectedNode = node;
  }

  hideOverlay(): void {
    this.selectedNode = null;
  }


}
