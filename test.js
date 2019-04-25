import test from 'ava';
import m2r from '.';

test('Throw error when incorrect datatype in the first argument', (t) => {
  const error = t.throws(() => {
    m2r(3);
  }, TypeError);

  t.is(error.message, 'Expected an String in the first argument, got number');
});

test('Throw error when incorrect datatype in the second argument', (t) => {
  const error = t.throws(() => {
    m2r('str', {}||[]);
  }, TypeError);

  t.is(error.message, 'Expected an String/Number in the second argument, got object');
});

test('Throw error when incorrect datatype in the third argument', (t) => {
  const error = t.throws(() => {
    m2r('str', 'str', 'str');
  }, TypeError);

  t.is(error.message, 'Expected a Number in the third argument, got string');
});

const shortText = 'Lorem ipsum';
const longText =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum iaculis, feugiat aenean sollicitudin platea posuere fusce eu urna, dapibus integer sapien tellus molestie semper egestas ornare. Sociis habitant suspendisse lacinia bibendum nibh duis at rhoncus, litora mi nisi curae quam nisl pellentesque nulla aliquam, euismod massa senectus commodo per eleifend magna. Malesuada ad cursus maecenas et sociosqu ac nunc fermentum dui habitasse, volutpat turpis proin hendrerit mus leo phasellus primis libero, arcu purus nam viverra est augue conubia sodales metus. Donec praesent elementum vitae aptent mollis cras magnis tincidunt, montes faucibus suscipit ultrices vulputate convallis eros, cubilia pharetra interdum a facilisi potenti risus. Diam class ut morbi parturient velit luctus pulvinar porta hac, nascetur placerat congue ante tortor varius odio. Himenaeos lobortis erat vivamus vestibulum neque mauris pretium mattis, facilisis lacus justo vel scelerisque dignissim auctor blandit, etiam dis in non laoreet torquent id. Tempus ligula tempor orci dictumst nostra venenatis enim gravida ullamcorper, taciti porttitor fringilla eget dictum fames ultricies vehicula rutrum, netus quis quisque accumsan ridiculus consequat aliquet felis. Imperdiet tristique curabitur nullam penatibus lectus sagittis sem cum sed, nec natoque inceptos placerat fames non odio enim ligula ac, potenti congue cras at pharetra lectus consequat donec. Nascetur litora mattis arcu vitae sollicitudin facilisi leo quis condimentum himenaeos, mi torquent commodo sed nunc natoque metus massa. Sapien porttitor est nisl curabitur dictum magna ornare praesent, ridiculus posuere eget tortor diam sagittis urna maecenas ante, vivamus vestibulum gravida eleifend netus accumsan nec. Dapibus viverra primis proin nullam luctus eu varius lacus id, ad augue convallis tincidunt bibendum justo curae tellus per senectus, platea dis quam pellentesque eros a rutrum fringilla. Erat elementum mus nulla morbi sodales ut porta pulvinar tristique orci turpis iaculis venenatis, molestie suspendisse penatibus vehicula habitant imperdiet etiam feugiat magnis phasellus libero cum. Nibh risus et ullamcorper hendrerit nam vel tempus volutpat scelerisque fermentum aliquet, neque purus nostra lacinia mauris class vulputate in ultricies quisque, dignissim suscipit cursus felis fusce hac habitasse montes inceptos rhoncus. Tempor velit mollis blandit laoreet dui cubilia dictumst semper, egestas pretium duis sociis auctor taciti aliquam, faucibus facilisis conubia lobortis aptent parturient interdum. Euismod integer ultrices aenean sociosqu malesuada sem nisi, lectus per magna cubilia ultrices parturient habitasse tristique, nullam tempor habitant a class auctor. Porta orci enim vel lobortis pellentesque ornare faucibus cras commodo morbi, eget donec aliquet sapien id ad leo dui tortor. Etiam luctus aliquam justo laoreet eros torquent pulvinar ligula semper sem, suspendisse libero risus mollis vivamus nisl urna tincidunt himenaeos, massa nunc euismod venenatis rutrum condimentum tellus nostra elementum. Magnis facilisi litora sollicitudin neque iaculis at, senectus hendrerit maecenas lacinia suscipit nibh aenean, dis primis vehicula malesuada natoque. Quis ridiculus velit varius pretium ultricies tempus, integer inceptos volutpat nec ac, praesent nam sodales scelerisque molestie. Curabitur et phasellus gravida non sociis montes mattis taciti diam cursus mi, curae convallis feugiat nisi bibendum interdum eu conubia vulputate. Sociosqu posuere vitae rhoncus fames dignissim egestas ut, eleifend potenti imperdiet dictumst vestibulum augue, duis fermentum cum mus arcu pharetra.';

test('Check a text less than a minute to read', (t) => {
  t.is(m2r(shortText), 'less than a min to read');
});

test('Check a text less than a minute to read with other action', (t) => {
  t.is(m2r(shortText, 'minute to finish'), 'less than a minute to finish');
});

test('Check a text less than a minute to read with custom wpm (1 wpm)', (t) => {
  t.is(m2r(shortText, 1), '2 min to read');
});

test('Check a text less than a minute to read with custom text and custom wpm (1 wpm)', (
  t,
) => {
  t.is(m2r(shortText, 'minutes to finish', 1), '2 minutes to finish');
});

test('Check a long text', (t) => {
  t.is(m2r(longText), '2 min to read');
});

test('Check text with custom wpm (1 word per minute)', (t) => {
  t.is(m2r(longText, 1), '500 min to read');
});

test('Check text with custom wpm (1 word per minute) and custom alt text', (
  t,
) => {
  t.is(m2r(longText, 'minutes to finish', 1), '500 minutes to finish');
});