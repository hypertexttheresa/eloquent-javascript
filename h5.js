function loop(val, test, update, body) {
  if(!test(val)) {
    return;
  }
  body(val); 
  val = update(val); 
  loop(val, test, update, body)
}
