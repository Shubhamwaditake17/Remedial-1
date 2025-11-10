// src/posts.js

// Using backticks (``) lets us create multi-paragraph strings
const longPostContent1 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Phasellus egestas tellus rutrum tellus pellentesque eu. Magna sit amet purus gravida quis. Nunc sed blandit libero volutpat sed cras. Tellus in metus vulputate eu scelerisque felis imperdiet. Egestas erat imperdiet sed euismod nisi. Consequat nisl vel pretium lectus quam id. Amet est placerat in egestas erat. Amet consectetur adipiscing elit duis tristique. Sagittis purus sit amet volutpat consequat. In est ante in nibh. Enim ut tellus elementum sagittis vitae et leo duis. Ultrices sagittis orci a scelerisque purus semper eget. Faucibus pulvinar elementum integer enim neque volutpat ac.

Vitae turpis massa sed elementum tempus egestas. Egestas purus viverra accumsan in nisl nisi. Nisl purus in mollis nunc sed id semper. Nunc sed id semper risus in hendrerit. Eget arcu dictum varius duis at consectetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. At auctor urna nunc id. Laoreet sit amet cursus sit amet dictum sit. Purus in massa tempor nec feugiat. Augue neque gravida in fermentum et sollicitudin ac. Commodo elit at imperdiet dui accumsan sit.

Orci porta non pulvinar neque laoreet suspendisse interdum. Varius morbi enim nunc faucibus a pellentesque sit amet. Risus at ultrices mi tempus imperdiet nulla. Id aliquet risus feugiat in ante metus dictum. Massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus. Leo in vitae turpis massa sed elementum tempus. Tellus cras adipiscing enim eu turpis. Felis eget nunc lobortis mattis aliquam faucibus purus in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada.

Nulla facilisi cras fermentum odio eu. Sit amet mattis vulputate enim nulla aliquet porttitor. Velit sed ullamcorper morbi tincidunt. Egestas sed tempus urna et pharetra. Eget nunc lobortis mattis aliquam faucibus purus. Erat imperdiet sed euismod nisi porta. Tincidunt augue interdum velit euismod in. Morbi quis commodo odio aenean sed. Accumsan in nisl nisi scelerisque. Nunc mattis enim ut tellus elementum. Consequat id porta nibh venenatis. Pellentesque habitant morbi tristique senectus et.

Eget dolor morbi non arcu risus quis varius. Velit aliquet sagittis id consectetur purus ut faucibus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Amet tellus cras adipiscing enim eu. Diam quam nulla porttitor massa id. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Risus quis varius quam quisque id diam.

Volutpat est velit egestas dui id. Velit laoreet id donec ultrices tincidunt arcu. At quis risus sed vulputate odio ut enim. Ut pharetra sit amet aliquam. Tortor at auctor urna nunc id cursus metus. Suspendisse ultrices gravida dictum fusce ut. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Faucibus interdum posuere lorem ipsum dolor sit. Eget mi proin sed libero enim sed faucibus. Mattis nunc sed blandit libero.

Aliquam sem et tortor consequat id. Tincidunt vitae semper quis lectus nulla at volutpat. Eu sem integer vitae justo eget magna. Viverra nibh cras pulvinar mattis. Est sit amet facilisis magna etiam tempor orci. Porttitor rhoncus dolor purus non enim praesent. Auctor eu augue ut lectus arcu bibendum. Nibh praesent tristique magna sit amet purus gravida.

Facilisis leo vel fringilla est ullamcorper. Aliquam ut porttitor leo a diam. Velit scelerisque in dictum non consectetur. Nec feugiat nisl pretium fusce. Nunc consequat interdum varius sit amet. Cursus turpis massa tincidunt dui ut. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Eget aliquet nibh praesent tristique.

Massa ultricies mi quis hendrerit dolor magna. Et netus et malesuada fames ac turpis egestas. Neque ornare aenean euismod elementum nisi quis eleifend. Euismod nisi porta lorem mollis aliquam ut. Tellus molestie nunc non blandit massa. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi. Vitae sapien pellentesque habitant morbi tristique senectus et. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
`;

const longPostContent2 = `
Vestibulum rhoncus est pellentesque elit ullamcorper. At tempor commodo ullamcorper a lacus vestibulum sed. Pulvinar elementum integer enim neque. In cursus turpis massa tincidunt dui ut. Amet nisl suscipit adipiscing bibendum est ultricies. In metus vulputate eu scelerisque felis imperdiet proin. Egestas fringilla phasellus faucibus scelerisque. Amet justo donec enim diam vulputate ut pharetra. Erat nam at lectus urna duis convallis. Ac tortor dignissim convallis aenean et tortor. Ultricies mi quis hendrerit dolor magna eget est lorem.

Dictum varius duis at consectetur. Nunc sed blandit libero volutpat sed cras. Tellus in metus vulputate eu scelerisque felis imperdiet. Egestas erat imperdiet sed euismod nisi. Consequat nisl vel pretium lectus quam id. Amet est placerat in egestas erat. Amet consectetur adipiscing elit duis tristique. Sagittis purus sit amet volutpat consequat. In est ante in nibh. Enim ut tellus elementum sagittis vitae et leo duis. Ultrices sagittis orci a scelerisque purus semper eget. Faucibus pulvinar elementum integer enim neque volutpat ac.

Vitae turpis massa sed elementum tempus egestas. Egestas purus viverra accumsan in nisl nisi. Nisl purus in mollis nunc sed id semper. Nunc sed id semper risus in hendrerit. Eget arcu dictum varius duis at consectetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. At auctor urna nunc id. Laoreet sit amet cursus sit amet dictum sit. Purus in massa tempor nec feugiat. Augue neque gravida in fermentum et sollicitudin ac. Commodo elit at imperdiet dui accumsan sit.

Orci porta non pulvinar neque laoreet suspendisse interdum. Varius morbi enim nunc faucibus a pellentesque sit amet. Risus at ultrices mi tempus imperdiet nulla. Id aliquet risus feugiat in ante metus dictum. Massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus. Leo in vitae turpis massa sed elementum tempus. Tellus cras adipiscing enim eu turpis. Felis eget nunc lobortis mattis aliquam faucibus purus in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada.

Nulla facilisi cras fermentum odio eu. Sit amet mattis vulputate enim nulla aliquet porttitor. Velit sed ullamcorper morbi tincidunt. Egestas sed tempus urna et pharetra. Eget nunc lobortis mattis aliquam faucibus purus. Erat imperdiet sed euismod nisi porta. Tincidunt augue interdum velit euismod in. Morbi quis commodo odio aenean sed. Accumsan in nisl nisi scelerisque. Nunc mattis enim ut tellus elementum. Consequat id porta nibh venenatis. Pellentesque habitant morbi tristique senectus et.

Eget dolor morbi non arcu risus quis varius. Velit aliquet sagittis id consectetur purus ut faucibus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Amet tellus cras adipiscing enim eu. Diam quam nulla porttitor massa id. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Risus quis varius quam quisque id diam.

Volutpat est velit egestas dui id. Velit laoreet id donec ultrices tincidunt arcu. At quis risus sed vulputate odio ut enim. Ut pharetra sit amet aliquam. Tortor at auctor urna nunc id cursus metus. Suspendisse ultrices gravida dictum fusce ut. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Faucibus interdum posuere lorem ipsum dolor sit. Eget mi proin sed libero enim sed faucibus. Mattis nunc sed blandit libero.

Aliquam sem et tortor consequat id. Tincidunt vitae semper quis lectus nulla at volutpat. Eu sem integer vitae justo eget magna. Viverra nibh cras pulvinar mattis. Est sit amet facilisis magna etiam tempor orci. Porttitor rhoncus dolor purus non enim praesent. Auctor eu augue ut lectus arcu bibendum. Nibh praesent tristique magna sit amet purus gravida.

Facilisis leo vel fringilla est ullamcorper. Aliquam ut porttitor leo a diam. Velit scelerisque in dictum non consectetur. Nec feugiat nisl pretium fusce. Nunc consequat interdum varius sit amet. Cursus turpis massa tincidunt dui ut. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Eget aliquet nibh praesent tristique.

Massa ultricies mi quis hendrerit dolor magna. Et netus et malesuada fames ac turpis egestas. Neque ornare aenean euismod elementum nisi quis eleifend. Euismod nisi porta lorem mollis aliquam ut. Tellus molestie nunc non blandit massa. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi. Vitae sapien pellentesque habitant morbi tristique senectus et. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
`;

const longPostContent3 = `
Aenean euismod elementum nisi quis eleifend quam. Faucibus turpis in eu mi bibendum neque. Purus sit amet luctus venenatis lectus. Auctor urna nunc id cursus metus aliquam eleifend mi. Scelerisque felis imperdiet proin fermentum. Bibendum est ultricies integer quis auctor elit sed vulputate. Massa sapien faucibus et molestie ac feugiat. Nisl tincidunt eget nullam non nisi est sit. Turpis egestas maecenas pharetra convallis posuere morbi. Amet porttitor eget dolor morbi non arcu.

Sollicitudin tempor id eu nisl nunc mi ipsum. Id aliquet lectus proin nibh nisl. Adipiscing elit ut aliquam purus sit amet luctus. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In eu mi bibendum neque egestas. Ut pharetra sit amet aliquam id diam. Consequat semper viverra nam libero justo laoreet. Mattis pellentesque id nibh tortor id aliquet. Ultricies integer quis auctor elit sed vulputate mi sit.

Vitae turpis massa sed elementum tempus egestas. Egestas purus viverra accumsan in nisl nisi. Nisl purus in mollis nunc sed id semper. Nunc sed id semper risus in hendrerit. Eget arcu dictum varius duis at consectetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. At auctor urna nunc id. Laoreet sit amet cursus sit amet dictum sit. Purus in massa tempor nec feugiat. Augue neque gravida in fermentum et sollicitudin ac. Commodo elit at imperdiet dui accumsan sit.

Orci porta non pulvinar neque laoreet suspendisse interdum. Varius morbi enim nunc faucibus a pellentesque sit amet. Risus at ultrices mi tempus imperdiet nulla. Id aliquet risus feugiat in ante metus dictum. Massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus. Leo in vitae turpis massa sed elementum tempus. Tellus cras adipiscing enim eu turpis. Felis eget nunc lobortis mattis aliquam faucibus purus in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada.

Nulla facilisi cras fermentum odio eu. Sit amet mattis vulputate enim nulla aliquet porttitor. Velit sed ullamcorper morbi tincidunt. Egestas sed tempus urna et pharetra. Eget nunc lobortis mattis aliquam faucibus purus. Erat imperdiet sed euismod nisi porta. Tincidunt augue interdum velit euismod in. Morbi quis commodo odio aenean sed. Accumsan in nisl nisi scelerisque. Nunc mattis enim ut tellus elementum. Consequat id porta nibh venenatis. Pellentesque habitant morbi tristique senectus et.

Eget dolor morbi non arcu risus quis varius. Velit aliquet sagittis id consectetur purus ut faucibus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Amet tellus cras adipiscing enim eu. Diam quam nulla porttitor massa id. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Risus quis varius quam quisque id diam.

Volutpat est velit egestas dui id. Velit laoreet id donec ultrices tincidunt arcu. At quis risus sed vulputate odio ut enim. Ut pharetra sit amet aliquam. Tortor at auctor urna nunc id cursus metus. Suspendisse ultrices gravida dictum fusce ut. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Faucibus interdum posuere lorem ipsum dolor sit. Eget mi proin sed libero enim sed faucibus. Mattis nunc sed blandit libero.

Aliquam sem et tortor consequat id. Tincidunt vitae semper quis lectus nulla at volutpat. Eu sem integer vitae justo eget magna. Viverra nibh cras pulvinar mattis. Est sit amet facilisis magna etiam tempor orci. Porttitor rhoncus dolor purus non enim praesent. Auctor eu augue ut lectus arcu bibendum. Nibh praesent tristique magna sit amet purus gravida.

Facilisis leo vel fringilla est ullamcorper. Aliquam ut porttitor leo a diam. Velit scelerisque in dictum non consectetur. Nec feugiat nisl pretium fusce. Nunc consequat interdum varius sit amet. Cursus turpis massa tincidunt dui ut. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Eget aliquet nibh praesent tristique.

Massa ultricies mi quis hendrerit dolor magna. Et netus et malesuada fames ac turpis egestas. Neque ornare aenean euismod elementum nisi quis eleifend. Euismod nisi porta lorem mollis aliquam ut. Tellus molestie nunc non blandit massa. Sit amet cursus sit amet. Egestas purus viverra accumsan in nisl nisi. Vitae sapien pellentesque habitant morbi tristique senectus et. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
`;

export const posts = [
  {
    id: '1',
    title: 'My First Blog Post',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    content: longPostContent1,
  },
  {
    id: '2',
    title: 'Understanding React Router',
    excerpt: 'Vestibulum rhoncus est pellentesque elit ullamcorper. At tempor commodo ullamcorper a lacus vestibulum sed. Pulvinar elementum integer enim neque...',
    content: longPostContent2,
  },
  {
    id: '3',
    title: 'What is a "Simplified" Blog?',
    excerpt: 'Aenean euismod elementum nisi quis eleifend quam. Faucibus turpis in eu mi bibendum neque. Purus sit amet luctus venenatis lectus. Auctor urna nunc id...',
    content: longPostContent3,
  }
];