# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities)
categories = Category.create([{name: 'Bar'},{name: 'Pub'},
  {name: 'Lounge'},{name: 'Aventura'},{name: 'Cafe'},
  {name: 'Casa de show'}])

tags = Tag.create([{name:'Geek'},{name:'Rock'},{name:'Alternativo'},{name:'LGBT'},{name:'Balada'},
  {name:'Ecletico'},{name:'Paraquedismo'},{name:'Aventura'},{name:'Escalada'},{name:'Wakeboard'},
  {name:'Sertanejo'},{name:'Helicoptero'},{name:'Luxo'},{name:'Oriental'},{name:'Comida'},{name:'Narguile'}])

recommendations = Recommendation.create([
  {name:'Arcade bar',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/KEqy0C'},
  {name:'Zeppelin Bar',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/QSNmUE'},
  {name:'Ouvidoria',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/7xAFJ4'},
  {name:'Pacova',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/TWldUa'},
  {name:'Capitao Bar',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/8MHPLD'},
  {name:'Rafain Chop',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/dF8L2g'},
  {name:'Laos',address:'rua dos joguinho', number: '1989', image: 'http://goo.gl/TIb2TN'},
  {name:'Medusa',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/OBFG9s'},
  {name:'Amarantha',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/7j81BV'},
  {name:'Balinas',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/KTpjty'},
  {name:'Dumam',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/MYLE71'},
  {name:'Skydive Foz',address:'rua dos joguinho', number: '1989', image: 'http://goo.gl/PsrYnf'},
  {name:'Ono',address:'rua dos joguinho', number: '1989', image: 'http://www.fozpresidentehoteis.com.br/img/lazer/img_6aede3b0.jpg'},
  {name:'Woods',address:'rua dos joguinho', number: '1989', image: 'http://goo.gl/8q9b6c'},
  {name:'Badass',address:'rua dos joguinho', number: '1989', image: 'https://goo.gl/sdmKDS'}])

  recommendations = RecommendationTag.create([
    {tag:Tag.find_by_name('Geek'),recommendation:Recommendation.find_by_name('Arcade Bar')},
    {tag:Tag.find_by_name('Rock'),recommendation:Recommendation.find_by_name('Zeppelin Bar')},
    {tag:Tag.find_by_name('Oriental'),recommendation:Recommendation.find_by_name('Laos')},
    {tag:Tag.find_by_name('LGBT'),recommendation:Recommendation.find_by_name('Amarantha')},
    {tag:Tag.find_by_name('Ecletico'),recommendation:Recommendation.find_by_name('Ono')},
    {tag:Tag.find_by_name('Sertanejo'),recommendation:Recommendation.find_by_name('Woods')},
    {tag:Tag.find_by_name('Ecletico'),recommendation:Recommendation.find_by_name('Rafain Chop')},
    {tag:Tag.find_by_name('Alternativo'),recommendation:Recommendation.find_by_name('Badass')},
    {tag:Tag.find_by_name('Ecletico'),recommendation:Recommendation.find_by_name('Ouvidoria')},
    {tag:Tag.find_by_name('Comida'),recommendation:Recommendation.find_by_name('Pacova')},
    {tag:Tag.find_by_name('Comida'),recommendation:Recommendation.find_by_name('Capitao Bar')},
    {tag:Tag.find_by_name('LGBT'),recommendation:Recommendation.find_by_name('Medusa')},
    {tag:Tag.find_by_name('Ecletico'),recommendation:Recommendation.find_by_name('Balinas')},
    {tag:Tag.find_by_name('Narguile'),recommendation:Recommendation.find_by_name('Duman')},
    {tag:Tag.find_by_name('Aventura'),recommendation:Recommendation.find_by_name('Skydive Foz')}])
