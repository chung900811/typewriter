const sentence = "hello my name is Terry from lighthouse labs";
let ms = 0;
for (const char of sentence) {
  ms += 50; 
  setTimeout(() =>process.stdout.write(char), ms);
if (ms === (50 * (sentence.length))) {
  setTimeout(() => process.stdout.write("\n"), ms)
  }
}





