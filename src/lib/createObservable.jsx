const createObservable = () => {
   class Observable {
      constructor() {
         this.observers = [];
      }

      subscribe(observer) {
         this.observers.push(observer);
      }

      unsubscribe(observer) {
         this.observers.filter(obs => obs !== observer);
      }

      fire() {
         this.observers.forEach(obs => obs());
      }
   }

   return new Observable();
}

export default createObservable