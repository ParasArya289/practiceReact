function HolidayPriorityQueue(){
    //Priority queue Constructor  
     this.queue = [];
  }
  
  HolidayPriorityQueue.prototype.addGift = function(gift){
    //Insert gift into priority queue and return new length
    let added = false;
    if(this.queue.length === 0){
      this.queue.push(gift)
      added = true;
    }else{
      for(let i=0;i<this.queue.length;i++){
      if(gift.priority < this.queue[i].priority){
        this.queue.splice(i,0,gift);
        added = true;
        break;
      }
    }
    }
    if(!added){
      this.queue.push(gift);
    }
    
    return this.queue.length;
    
  }
  
  HolidayPriorityQueue.prototype.buyGift = function(){
    //Return gift with highest priority (lowest integer value)
    
    if(this.queue.length === 0){
      return '';
    }
    const { gift } = this.queue.shift()
    return gift;
  }