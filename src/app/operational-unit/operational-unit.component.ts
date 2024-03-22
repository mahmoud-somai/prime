import { Component } from '@angular/core';

@Component({
  selector: 'app-operational-unit',
  templateUrl: './operational-unit.component.html',
  styleUrls: ['./operational-unit.component.css']
})
export class OperationalUnitComponent  {
  data = [
    {
      label: 'CEO',
      type: 'person',
      styleClass: 'ui-person',
      expanded: true,
      data: { name: 'John Doe', position: 'CEO' },
      children: [
        {
          label: 'Manager',
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: 'Jane Smith', position: 'Manager' },
          children: [
            {
              label: 'Employee 1',
              type: 'person',
              styleClass: 'ui-person',
              data: { name: 'Alice Johnson', position: 'Employee' }
            },
            {
              label: 'Employee 2',
              type: 'person',
              styleClass: 'ui-person',
              data: { name: 'Bob Williams', position: 'Employee' }
            }
          ]
        },
        {
          label: 'Manager',
          type: 'person',
          styleClass: 'ui-person',
          expanded: true,
          data: { name: 'Mark Davis', position: 'Manager' },
          children: [
            {
              label: 'Employee 3',
              type: 'person',
              styleClass: 'ui-person',
              data: { name: 'Eva Brown', position: 'Employee' }
            },
            {
              label: 'Employee 4',
              type: 'person',
              styleClass: 'ui-person',
              data: { name: 'Charlie Wilson', position: 'Employee' }
            }
          ]
        }
      ]
    }
  ];
}
