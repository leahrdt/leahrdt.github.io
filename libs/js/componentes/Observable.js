class Observable {
  topics = {}
  /*topics = {
    envieBuena: [f,f,f,f],
    envieMala: [f,f],
    envieRegular: [f,f,f]
  }*/
  
  subscribe(topic, observable){
    if(topic in this.topics == false){
      this.topics[topic] = [];
    }
    this.topics[topic].push(observable);
  }
  unsubscribe(topic, observable){
    if(topic in this.topic){
      this.topics[topic] = this.topics[topic].filter(ob => ob != observable);
    }
  }
  notify(topic, data){
    if(topic in this.topics){
      this.topics[topic].forEach( callback => callback(data) );
    }
  }
}

/*class Observable {
  observadores = []
  
  subscribe(observable){
    this.observadores.push(observable);
  }
  unsubscribe(observable){
    this.observadores = this.observadores.filter(ob => ob != observable);
    
  }
  notify(data){
    this.observadores.forEach( callback => callback(data) );
  }
}*/