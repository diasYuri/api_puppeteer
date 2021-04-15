const books = [
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81eoNtMNU%2BL._AC_UL200_SR200,200_.jpg",
    alt: "O homem mais rico da Babilônia",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91RU544KgKL._AC_UL200_SR200,200_.jpg",
    alt: "Corte de espinhos e rosas (Vol. 1)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61oP40xcVML._AC_UL200_SR200,200_.jpg",
    alt: "Torto arado",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/7121bMhcNKL._AC_UL200_SR200,200_.jpg",
    alt: "Mulheres que correm com os lobos",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91SDZ2eUj%2BL._AC_UL200_SR200,200_.jpg",
    alt: "Verity",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81r5VTxaBiL._AC_UL200_SR200,200_.jpg",
    alt: "Do Mil ao Milhão. Sem Cortar o Cafezinho.",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61t0bwt1s3L._AC_UL200_SR200,200_.jpg",
    alt: "1984",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81XTXQEVPlL._AC_UL200_SR200,200_.jpg",
    alt: "O poder do hábito",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61ujUbsQUxS._AC_UL200_SR200,200_.jpg",
    alt: "Jujutsu Kaisen - Batalha De Feiticeiros Vol. 1",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81D0qNDMqPL._AC_UL200_SR200,200_.jpg",
    alt: "A revolução dos bichos: Um conto de fadas",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91Sn67XUSHL._AC_UL200_SR200,200_.jpg",
    alt: "Corte de névoa e fúria (Vol. 2 Corte de espinhos e rosas)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81OB0tom28L._AC_UL200_SR200,200_.jpg",
    alt: "Mindset: A nova psicologia do sucesso",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61IyVwT%2BrRL._AC_UL200_SR200,200_.jpg",
    alt: "Pai rico, pai pobre: Edição de 20 anos atualizada e ampliada",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91S4QyGAirL._AC_UL200_SR200,200_.jpg",
    alt: "O príncipe cruel (Vol. 1 O Povo do Ar)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81sR3mT3Z2L._AC_UL200_SR200,200_.jpg",
    alt: "O poder da ação",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/71fcsbZKaGL._AC_UL200_SR200,200_.jpg",
    alt: "O morro dos ventos uivantes",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61uwsJ3RhgL._AC_UL200_SR200,200_.jpg",
    alt: "A coragem de ser imperfeito",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/A14Lz8uPGaL._AC_UL200_SR200,200_.jpg",
    alt: "Corte de asas e ruína (Vol. 3 Corte de espinhos e rosas)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91MAequ2koL._AC_UL200_SR200,200_.jpg",
    alt: "Jujutsu Kaisen - Batalha De Feiticeiros Vol. 2",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91nPloyNyvL._AC_UL200_SR200,200_.jpg",
    alt:
      "Corte de Gelo e Estrelas (Vol. 4 Corte de espinhos e rosas): Uma novela do universo de Corte de espinhos e rosas",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81A6qTcEONL._AC_UL200_SR200,200_.jpg",
    alt:
      "Especialista em pessoas: Soluções bíblicas e inteligentes para lidar com todo tipo de gente",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91H3MUAHH2L._AC_UL200_SR200,200_.jpg",
    alt: "Aristóteles e Dante descobrem os segredos do universo",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91vZBs7i-%2BL._AC_UL200_SR200,200_.jpg",
    alt: "A rainha do nada (Vol. 3 O Povo do Ar)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91miCUPPK7L._AC_UL200_SR200,200_.jpg",
    alt: "O rei perverso (Vol. 2 O Povo do Ar)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41zcA8iynSL._AC_UL200_SR200,200_.jpg",
    alt:
      "O milagre da manhã: O segredo para transformar sua vida (antes das 8 horas)",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/816m3mfx21L._AC_UL200_SR200,200_.jpg",
    alt: "Jujutsu Kaisen - Batalha De Feiticeiros Vol. 3",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/71tUN8YG5sL._AC_UL200_SR200,200_.jpg",
    alt: "Vermelho, branco e sangue azul",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81fh7%2BJTXnL._AC_UL200_SR200,200_.jpg",
    alt: "Six of crows: Sangue e mentiras",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81U%2BSCL9X2L._AC_UL200_SR200,200_.jpg",
    alt: "A hora da essência",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61hOp6UFvCL._AC_UL200_SR200,200_.jpg",
    alt: "Admirável mundo novo",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91CCCLb9RYL._AC_UL200_SR200,200_.jpg",
    alt: "Espada de vidro",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/817lFvoZqwL._AC_UL200_SR200,200_.jpg",
    alt: "Essencialismo",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/A10exFnc-iL._AC_UL200_SR200,200_.jpg",
    alt: "Cartas de um diabo a seu aprendiz",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81ZnJcgjCdL._AC_UL200_SR200,200_.jpg",
    alt: "Os segredos da mente milionária",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81wcIKnNEtL._AC_UL200_SR200,200_.jpg",
    alt:
      "As cinco linguagens do amor - 3 edição: Como expressar um compromisso de amor a seu cônjuge",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41rK-7HUAML._AC_UL200_SR200,200_.jpg",
    alt: "A rainha vermelha",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/612QiXA%2BFyL._AC_UL200_SR200,200_.jpg",
    alt: "A revolução dos bichos",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81DVD18xpML._AC_UL200_SR200,200_.jpg",
    alt: "Quem pensa enriquece - o legado: O legado",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81LRk6%2Bp1HL._AC_UL200_SR200,200_.jpg",
    alt: "A garota do lago",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81OFRScMKRL._AC_UL200_SR200,200_.jpg",
    alt:
      "Talvez você deva conversar com alguém: Uma terapeuta, o terapeuta dela e a vida de todos nós",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/71vfutuuhnL._AC_UL200_SR200,200_.jpg",
    alt:
      "Comunicação não-violenta: técnicas para aprimorar relacionamentos pessoais e profissionais",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/819yQiBELCL._AC_UL200_SR200,200_.jpg",
    alt:
      "O PODER DA AÇÃO PARA CRIANÇAS: Como aprender sobre autorresponsabilidade e preparar seus filhos para um vida feliz e…",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/610-Mw0duDL._AC_UL200_SR200,200_.jpg",
    alt: "Sociedade do cansaço",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41qwit8V%2BsL._AC_UL200_SR200,200_.jpg",
    alt: "Fahrenheit 451",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81CAkAxTIWL._AC_UL200_SR200,200_.jpg",
    alt: "Um de nós está mentindo",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/71GF0Qz3DSL._AC_UL200_SR200,200_.jpg",
    alt: "Em Busca De Sentido: Um psicólogo no campo de concentração",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/8156BPATttL._AC_UL200_SR200,200_.jpg",
    alt: "Não aguento mais",
  },
  {
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81-OTWhQ%2BkL._AC_UL200_SR200,200_.jpg",
    alt: "A prisão do rei",
  },
];

export default function mockApi() {
  return books;
}
