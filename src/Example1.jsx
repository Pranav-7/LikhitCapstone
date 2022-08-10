import React from "react";

const Example1 = ({message}) => {
  const tasks = [
    {
      taskId: '2018',
      roles: [
        {
          month: "May-2018",
          description: "Design user-fridendly web page",
          startDate: "2016-05-01",
          endDate: "2016-09-01",
          
        },
        {
            month: "May-2018",
            description: "Design user-fridendly web page",
            startDate: "2016-05-01",
            endDate: "2016-09-01",
            
          },
          {
            month: "May-2018",
            description: "Design user-fridendly web page",
            startDate: "2016-05-01",
            endDate: "2016-09-01",
            
          },
      ],
    },
    {
        taskId: '2019',
        roles: [
          {
            month: "May-2019",
            description: "Design user-fridendly web page",
            startDate: "2016-05-01",
            endDate: "2016-09-01",
            
          },
          {
              month: "May-2019",
              description: "Design user-fridendly web page",
              startDate: "2016-05-01",
              endDate: "2016-09-01",
              
            },
            {
              month: "May-2019",
              description: "Design user-fridendly web page",
              startDate: "2016-05-01",
              endDate: "2016-09-01",
              
            },
        ],
      },
  ];
  return (
    
      
      
      <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Month</th>
                      <th scope="col">Opening Cash</th>
                      <th scope="col">EMI & INTEREST</th>
                      <th scope="col">Loan</th>
                      <th scope="col">Balances</th>
                    </tr>
                  </thead>
                  <tbody>
      {tasks
        .filter((task) => task.taskId === '2019')
        .map((task) => {
            
          return task.roles.map(function (role, i) {
            return (
              <>
                
                    <tr>
                        <td>{role.month}</td>
                        <td>{role.description}</td>
                        <td>{role.endDate}</td>
                        <td>{role.startDate}</td>
                    </tr>
                
              </>
            );
          });
        })}

        </tbody>
                </table>
  );
};

export default Example1;
