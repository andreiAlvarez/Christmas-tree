// solution 1

function christmasTree(height) {
let string = [];
  for (let i = 1; i <= height; i++) {
    string.push(
      " ".repeat(height - i) +
        "*".repeat((i - 1) * 2 + 1) +
        " ".repeat(height - i)
    );
  }
  return string.join("\n");
}

// solution 2 

var christmasTree = (h)=>{

            var         
        i=0,l=2*h-1
    ,t='';while(1){var 
   j=1;while(j<=l){t+=j<
  h-i||j>h+i?' ':'*';++j}
 ++i;if(i>=h)break;t+='\n';
             };
          return t

}

// solution 3

const christmasTree = height => Array.from({length:height}, (_, i) => " ".repeat(height - 1 - i) + '*'.repeat(2 * i + 1) + " ".repeat(height - 1 - i)).join('\n');


