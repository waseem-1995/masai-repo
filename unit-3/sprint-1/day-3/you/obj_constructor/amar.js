
    let person1={
        name:'amar',
        skill:'singer',
        place:'goa',
        borrow_skill(buy){
                console.log(`want ${this.skill} from ${this.name}`);
            },

    };
        
    let person2={
        name:'akbar',
        skill:'chef',
        place:'mumbai',

    };

    let person3={
        name:'anthony',
        skill:'magician',
        place:'kashmir',

    };
    person1.borrow_skill('akbar')
    person1.borrow_skill.call(person2)
