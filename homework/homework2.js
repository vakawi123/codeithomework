const complexProducts = [
    {
      productId: 301,
      metadata: {
        info: {
          title: "Gaming Laptop",
          specs: {
            cpu: "Intel i9",
            gpu: "NVIDIA RTX 3080",
            ram: "32GB",
            storage: {
              type: "SSD",
              size: "1TB"
            }
          },
          prices: {
            usd: 2500,
            eur: 2300,
            gbp: 2100
          }
        },
        reviews: [
          {
            reviewer: "Alice",
            rating: 5,
            comments: [
              { id: 401, text: "Excellent performance!", timestamp: "2024-05-25T12:00:00Z" },
              { id: 402, text: "A bit expensive but worth it.", timestamp: "2024-05-26T15:00:00Z" }
            ]
          },
          {
            reviewer: "Bob",
            rating: 4,
            comments: [
              { id: 403, text: "Great graphics!", timestamp: "2024-05-27T18:00:00Z" },
              { id: 404, text: "Battery life could be better.", timestamp: "2024-05-28T20:00:00Z" }
            ]
          }
        ]
      }
    },
    {
      productId: 302,
      metadata: {
        info: {
          title: "Smartwatch",
          specs: {
            cpu: "Dual-Core",
            ram: "1GB",
            storage: {
              type: "Flash",
              size: "32GB"
            }
          },
          prices: {
            usd: 300,
            eur: 280,
            gbp: 260
          }
        },
        reviews: [
          {
            reviewer: "Charlie",
            rating: 4,
            comments: [
              { id: 405, text: "Very convenient and stylish.", timestamp: "2024-05-20T10:00:00Z" },
              { id: 406, text: "Needs more apps.", timestamp: "2024-05-21T14:00:00Z" }
            ]
          },
          {
            reviewer: "Dana",
            rating: 5,
            comments: [
              { id: 407, text: "Excellent battery life!", timestamp: "2024-05-22T16:00:00Z" },
              { id: 408, text: "Love the fitness tracking features.", timestamp: "2024-05-23T18:00:00Z" }
            ]
          }
        ]
      }
    }
  ];
  
  console.log(complexProducts[0].productId);
  console.log(complexProducts[0].metadata.info.title);
  console.log(complexProducts[0].metadata.info.specs.storage);
  console.log(complexProducts[0].metadata.info.specs.storage.type);
  console.log(complexProducts[0].metadata.info.specs.storage.size);
  console.log(complexProducts[1].metadata.info.specs.ram)
  console.log(complexProducts[1].metadata.reviews[1].comments[1].text)
  
  
  
  
  
  
  
  