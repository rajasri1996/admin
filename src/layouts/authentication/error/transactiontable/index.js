/* eslint-disable react/prop-types */
// ProductsList page components
// import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";


export default {
  columns: [ 
    

    {
        Header: "Transaction Date",
        accessor: "id", width:"70%" ,
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
    {
      Header: "Trxn Mode",
      accessor: "name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    // {
    //   Header: "status",
    //   accessor: "status",
    //   Cell: ({ value }) => {
    //     let status;

    //     if (value === "paid") {
    //       status = <StatusCell icon="done" color="success" status="Paid" />;
    //     } else if (value === "refunded") {
    //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
    //     } else {
    //       status = <StatusCell icon="close" color="error" status="Canceled" />;
    //     }

    //     return status;
    //   },
    // },
 
    {
      Header: "Investor Name",
      accessor: "PAN",
      Cell: ({ value }) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
    { Header: "User Id", accessor: "id3", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Transaction Type", accessor: "id4", width: "30%" },
    { Header: "Folio No", accessor: "id5", width: "30%" },
    { Header: "AMC", accessor: "id6", width: "30%" },
    { Header: "Scheme Name", accessor: "id7", width: "30%" },
    { Header: "NAV", accessor: "id8", width: "30%" },
    { Header: "Units", accessor: "id9", width: "30%" },
    { Header: "Transaction Amount", accessor: "id10", width: "30%" },
 
  ],

  rows: [
    {
      id: " July 21, 2022",
      name: "RTA",
      // status: "paid",
      id1: "9789916097",
      PAN: "KHUSHBOO TAPARIA BEDI",
      id3: "K108148",
      id4: "Switch Out",
      id5: "1041098819",
      id6: "Aditya Birla Sun Life Mutual Fund",
      id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
      id8: "445.03",
      id9: "11.235",
      id10: "5,000",
     
    },
   
    {
        id: " Jul 21, 2022	",
        name: "RTA",
        // status: "paid",
        id1: "9789916097",
        PAN: "KHUSHBOO TAPARIA BEDI",
        id3: "K108148",
        id4: "Switch Out",
        id5: "1041098819",
        id6: "Aditya Birla Sun Life Mutual Fund",
        id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
        id8: "445.03",
        id9: "11.235",
        id10: "5,000",
       
      },
      {
        id: " Jul 21, 2022",
        name: "RTA",
        // status: "paid",
        id1: "9789916097",
        PAN: "KHUSHBOO TAPARIA BEDI",
        id3: "K108148",
        id4: "Switch Out",
        id5: "1041098819",
        id6: "Aditya Birla Sun Life Mutual Fund",
        id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
        id8: "445.03",
        id9: "11.235",
        id10: "5,000",
       
      },
      {
        id: " Jul 21, 2022",
        name: "RTA",
        // status: "paid",
        id1: "9789916097",
        PAN: "KHUSHBOO TAPARIA BEDI",
        id3: "K108148",
        id4: "Switch Out",
        id5: "1041098819",
        id6: "Aditya Birla Sun Life Mutual Fund",
        id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
        id8: "445.03",
        id9: "11.235",
        id10: "5,000",
       
      },
      {
        id: " July 21, 2022",
        name: "RTA",
        // status: "paid",
        id1: "9789916097",
        PAN: "KHUSHBOO TAPARIA BEDI",
        id3: "K108148",
        id4: "Switch Out",
        id5: "1041098819",
        id6: "Aditya Birla Sun Life Mutual Fund",
        id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
        id8: "445.03",
        id9: "11.235",
        id10: "5,000",
       
      },
     
      {
          id: " Jul 21, 2022	",
          name: "RTA",
          // status: "paid",
          id1: "9789916097",
          PAN: "KHUSHBOO TAPARIA BEDI",
          id3: "K108148",
          id4: "Switch Out",
          id5: "1041098819",
          id6: "Aditya Birla Sun Life Mutual Fund",
          id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
          id8: "445.03",
          id9: "11.235",
          id10: "5,000",
         
        },
        {
          id: " Jul 21, 2022",
          name: "RTA",
          // status: "paid",
          id1: "9789916097",
          PAN: "KHUSHBOO TAPARIA BEDI",
          id3: "K108148",
          id4: "Switch Out",
          id5: "1041098819",
          id6: "Aditya Birla Sun Life Mutual Fund",
          id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
          id8: "445.03",
          id9: "11.235",
          id10: "5,000",
         
        },
        {
          id: " Jul 21, 2022",
          name: "RTA",
          // status: "paid",
          id1: "9789916097",
          PAN: "KHUSHBOO TAPARIA BEDI",
          id3: "K108148",
          id4: "Switch Out",
          id5: "1041098819",
          id6: "Aditya Birla Sun Life Mutual Fund",
          id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
          id8: "445.03",
          id9: "11.235",
          id10: "5,000",
         
        },

        {
            id: " July 21, 2022",
            name: "RTA",
            // status: "paid",
            id1: "9789916097",
            PAN: "KHUSHBOO TAPARIA BEDI",
            id3: "K108148",
            id4: "Switch Out",
            id5: "1041098819",
            id6: "Aditya Birla Sun Life Mutual Fund",
            id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
            id8: "445.03",
            id9: "11.235",
            id10: "5,000",
           
          },
         
          {
              id: " Jul 21, 2022	",
              name: "RTA",
              // status: "paid",
              id1: "9789916097",
              PAN: "KHUSHBOO TAPARIA BEDI",
              id3: "K108148",
              id4: "Switch Out",
              id5: "1041098819",
              id6: "Aditya Birla Sun Life Mutual Fund",
              id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
              id8: "445.03",
              id9: "11.235",
              id10: "5,000",
             
            },
            {
              id: " Jul 21, 2022",
              name: "RTA",
              // status: "paid",
              id1: "9789916097",
              PAN: "KHUSHBOO TAPARIA BEDI",
              id3: "K108148",
              id4: "Switch Out",
              id5: "1041098819",
              id6: "Aditya Birla Sun Life Mutual Fund",
              id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
              id8: "445.03",
              id9: "11.235",
              id10: "5,000",
             
            },
            {
              id: " Jul 21, 2022",
              name: "RTA",
              // status: "paid",
              id1: "9789916097",
              PAN: "KHUSHBOO TAPARIA BEDI",
              id3: "K108148",
              id4: "Switch Out",
              id5: "1041098819",
              id6: "Aditya Birla Sun Life Mutual Fund",
              id7: "ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH",
              id8: "445.03",
              id9: "11.235",
              id10: "5,000",
             
            },
  ],
};
