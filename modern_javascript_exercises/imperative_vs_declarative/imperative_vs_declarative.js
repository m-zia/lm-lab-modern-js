// Instructions cana be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  // let longPasswords = [];

  // for (let i = 0; i < passwords.length; i++) {
  //   const password = passwords[i];
  //   if (password.length >= 9) {
  //     longPasswords.push(password);
  //   }
  // }

  //return longPasswords;

  return passwords.filter(password => password.length >= 9);

}
