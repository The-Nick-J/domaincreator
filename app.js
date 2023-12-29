  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const domains = ['.com', '.net']


  pronoun.forEach(element1 => {
    adj.forEach(element2 => {
        noun.forEach(element3 => {
            domains.forEach(element4 => {
                console.log(element1 + element2 + element3 + element4);
            });
        });
    });
  });