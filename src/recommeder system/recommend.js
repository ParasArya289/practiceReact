//recommender sytem using graph theory
//read more about it and code graph weight should be users cart data, wishlist data, and search queries.

// Sample user search data, cart, and wishlist
const userSearchData = [
    { id: 'item1', name: 'Item 1' },
    { id: 'item2', name: 'Item 2' },
    { id: 'item3', name: 'Item 3' },
    // ... more search data
  ];
  
  const userCart = [
    { id: 'item4', name: 'Item 4' },
    { id: 'item5', name: 'Item 5' },
    { id: 'item6', name: 'Item 6' },
    // ... more cart items
  ];
  
  const userWishlist = [
    { id: 'item7', name: 'Item 7' },
    { id: 'item8', name: 'Item 8' },
    { id: 'item9', name: 'Item 9' },
    // ... more wishlist items
  ];
  
  // Sample item data with properties (name, id, inStock)
  const itemData = [
    { id: 'item1', name: 'Item 1', inStock: true },
    { id: 'item2', name: 'Item 2', inStock: true },
    { id: 'item3', name: 'Item 3', inStock: false },
    { id: 'item4', name: 'Item 4', inStock: true },
    { id: 'item5', name: 'Item 5', inStock: false },
    { id: 'item6', name: 'Item 6', inStock: true },
    { id: 'item7', name: 'Item 7', inStock: true },
    { id: 'item8', name: 'Item 8', inStock: true },
    { id: 'item9', name: 'Item 9', inStock: false },
    // ... more item data
  ];
  
  // Recommendation System class
  class RecommendationSystem {
    constructor(itemData) {
      this.itemData = itemData;
    }
  
    // Get recommendations based on user data
    getRecommendations(searchData, cart, wishlist, numRecs) {
      const userInteractions = [...searchData, ...cart, ...wishlist];
  
      // Collaborative filtering: Find items interacted by similar users
      const similarItems = this.findSimilarItems(userInteractions, numRecs);
  
      // Content-based filtering: Consider item properties
      const recommendations = this.filterItemsByProperties(similarItems);
  
      return recommendations;
    }
  
    // Find items interacted by similar users
    findSimilarItems(userInteractions, numRecs) {
      // Implement your logic to find similar users or items based on interactions
      // For simplicity, this example returns random items from itemData
  
      const randomItems = this.shuffleArray(this.itemData);
      return randomItems.slice(0, numRecs);
    }
  
    // Filter items based on properties
    filterItemsByProperties(items) {
      // Filter items based on desired properties (e.g., inStock)
      return items.filter((item) => item.inStock);
    }
  
    // Shuffle array (Fisher-Yates algorithm)
    shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const  j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }
  }
  
  // Usage example
  
  // Create a recommendation system
  const recommender = new RecommendationSystem(itemData);
  
  // Get recommendations for a user
  const recommendations = recommender.getRecommendations(userSearchData, userCart, userWishlist, 3);
  console.log('Recommendations:', recommendations);