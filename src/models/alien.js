/* eslint-disable func-names */

import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
const file = path.join(__dirname, '../../data/aliens.json');

function Alien(o) {
  this.id = uuid.v1();
  this.name = o.name;
  this.photo = o.photo;
  this.planet = o.planet;
}

module.exports = Alien;

Alien.find = function () {
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  data.pop();
  return data.map(d => JSON.parse(d));
};

Alien.prototype.save = function () {
  fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
};
