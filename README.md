# Social Toolkit

Documentação da API - Utilitários para construção de redes, plataformas e comunidades sociais: validações de dados, geração de avatares aleatórios e criação de perfis falsos para testes.

## Geração de usuários fakes

**Gera um usuário fake aleatório**

```
social-toolkit-gamma.vercel.app/api/fakeUser/random
```
<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
{
  "id": 28,
  "name": "Júlio Campos",
  "username": "eu_julio",
  "email": "juliocampos30@fakemail.com",
  "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28",
  "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/28",
  "bio": "Jogador",
  "gender": "Masculino",
  "birthdate": "15-06-1998",
  "country": "Brasil",
  "location": "Minas Gerais, MG",
  "verified": false,
  "followers": 487,
  "following": 538
}
</pre>
</details>

<br>

**Gera uma usuária aleatória feminina**

```
social-toolkit-gamma.vercel.app/api/fakeUser/random/gender/f
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
{
  "id": 9,
  "name": "Alessandra Melchior",
  "username": "melchior_ale",
  "email": "ale45melchior@fakemail.com",
  "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9",
  "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/9",
  "bio": "Além das aparências",
  "gender": "Feminino",
  "birthdate": "12-05-2000",
  "country": "Brasil",
  "location": "Brasília, BSB",
  "verified": false,
  "followers": 5436,
  "following": 3789
}
</pre>
</details>

<br>

**Gera um usuário aleatório masculino**

```
social-toolkit-gamma.vercel.app/api/fakeUser/random/gender/m
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
{
  "id": 17,
  "name": "Otávio Alencar",
  "username": "otavio",
  "email": "otavio@fakemail.com",
  "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17",
  "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/17",
  "bio": "Advogado e CEO da @alencar_variedades",
  "gender": "Masculino",
  "birthdate": "16-03-1985",
  "country": "Brasil",
  "location": "São Paulo, SP",
  "verified": true,
  "followers": 49736,
  "following": 1549
}
</pre>
</details>

<br>

**Busca um usuário pelo ID**

```
social-toolkit-gamma.vercel.app/api/fakeUser/id/1 
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
{
  "id": 1,
  "name": "Lucas Ferreira",
  "username": "eu_lucas",
  "email": "lucas@fakemail.com",
  "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1",
  "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/1",
  "bio": "Viva como se não ouvesse amanhâ.",
  "gender": "Masculino",
  "birthdate": "25-07-1972",
  "country": "Brasil",
  "location": "São Paulo, SP",
  "verified": false,
  "followers": 5486,
  "following": 542
}    
</pre>
</details>

<br>

**Retorna todos os usuários da API**

```
social-toolkit-gamma.vercel.app/api/fakeUser/all
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
[
  {
    "id": 1,
    "name": "Lucas Ferreira",
    "username": "eu_lucas",
    "email": "lucas@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/1",
    "bio": "Viva como se não ouvesse amanhâ.",
    "gender": "Masculino",
    "birthdate": "25-07-1972",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 5486,
    "following": 542
  },
  {
    "id": 2,
    "name": "Jeferson Albuquerque",
    "username": "eu_jef",
    "email": "jefalbuquerque@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/2",
    "bio": "Violinista, adoro musicas🎶",
    "gender": "Masculino",
    "birthdate": "14-08-1992",
    "country": "Brasil",
    "location": "Bahia, BA",
    "verified": false,
    "followers": 542,
    "following": 438
  },
  {
    "id": 3,
    "name": "Ravi Ramesh",
    "username": "ravi_ramesh",
    "email": "ravi@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/3",
    "bio": "रमेश इंडस्ट्रीज लिमिटेड के सीईओ",
    "gender": "Masculino",
    "birthdate": "15-04-1995",
    "country": "India",
    "location": "Assam, AS",
    "verified": false,
    "followers": 876,
    "following": 852
  },
  {
    "id": 4,
    "name": "Jessica Pereira",
    "username": "me_jess",
    "email": "pereirajess@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/4",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/4",
    "bio": "Be your best version💕",
    "gender": "Feminino",
    "birthdate": "22-06-2000",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 384,
    "following": 362
  },
  {
    "id": 5,
    "name": "Juliana Lima",
    "username": "ju_lima",
    "email": "julima@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/5",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/5",
    "bio": "A visão das estrelas me fazem sonhar",
    "gender": "Feminino",
    "birthdate": "18-10-1998",
    "country": "Brasil",
    "location": "Mato Grosso, MT",
    "verified": false,
    "followers": 122,
    "following": 217
  },
  {
    "id": 6,
    "name": "Stefany Lindsay",
    "username": "stef_lindsay",
    "email": "lindsaystef@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/6",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/6",
    "bio": "Photographer and designer",
    "gender": "Feminino",
    "birthdate": "25-10-2002",
    "country": "EUA",
    "location": "Kansas, KS",
    "verified": false,
    "followers": 687,
    "following": 627
  },
  {
    "id": 7,
    "name": "Thiago Silva",
    "username": "coronel_thiagosilva",
    "email": "thiagosilva@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/7",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/7",
    "bio": "A pressa é inimiga da perfeição",
    "gender": "Masculino",
    "birthdate": "21-06-1991",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 2435,
    "following": 1239
  },
  {
    "id": 8,
    "name": "Agatha Guilmesh",
    "username": "aghata",
    "email": "guimeshaghata@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/8",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/8",
    "bio": "Dancing amidst the chaos - Songwriter and singer",
    "gender": "Feminino",
    "birthdate": "14-04-1993",
    "country": "Canada",
    "location": "Ontário, ON",
    "verified": true,
    "followers": 195849,
    "following": 2489
  },
  {
    "id": 9,
    "name": "Alessandra Melchior",
    "username": "melchior_ale",
    "email": "ale45melchior@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/9",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/9",
    "bio": "Além das aparências",
    "gender": "Feminino",
    "birthdate": "12-05-2000",
    "country": "Brasil",
    "location": "Brasília, BSB",
    "verified": false,
    "followers": 5436,
    "following": 3789
  },
  {
    "id": 10,
    "name": "Emily Garcia",
    "username": "emily_garcia",
    "email": "garciaemily@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/10",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/10",
    "bio": "Sou louca pelo o que me fascina",
    "gender": "Feminino",
    "birthdate": "26-08-2001",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 1374,
    "following": 946
  },
  {
    "id": 11,
    "name": "Nataly Lima",
    "username": "eu_nataly_lima",
    "email": "limanataly8@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/11",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/11",
    "bio": "Violinista no tempo livre",
    "gender": "Feminino",
    "birthdate": "06-03-2001",
    "country": "Brasil",
    "location": "Pernambuco, PE",
    "verified": false,
    "followers": 763,
    "following": 842
  },
  {
    "id": 12,
    "name": "Giulia Bianchi",
    "username": "giulia",
    "email": "giuliabianchi@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/12",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/12",
    "bio": "Madre di @franchesca, cantante per amore",
    "gender": "Feminino",
    "birthdate": "18-07-1995",
    "country": "Italia",
    "location": "Aosta Valley, VDA",
    "verified": true,
    "followers": 86579,
    "following": 6792
  },
  {
    "id": 13,
    "name": "Larissa Melo",
    "username": "lari_melo",
    "email": "melolarissa6@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/13",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/13",
    "bio": "Inefável💜",
    "gender": "Feminino",
    "birthdate": "28-05-2005",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 2786,
    "following": 983
  },
  {
    "id": 14,
    "name": "Sharow Mustang",
    "username": "sharow_mustang",
    "email": "sharowmustang@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/14",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/14",
    "bio": "Experience🎶",
    "gender": "Feminino",
    "birthdate": "24-08-1993",
    "country": "EUA", 
    "location": "Virgia, VA",
    "verified": false,
    "followers": 1372,
    "following": 1298
  },
  {
    "id": 15,
    "name": "Hanna Lange",
    "username": "ich_hanna",
    "email": "hannalange@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/15",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/15",
    "bio": "Wagen Sie sich ins Leben",
    "gender": "Feminino",
    "birthdate": "03-01-2003",
    "country": "Alemanha",
    "location": "Hessen, HE",
    "verified": false,
    "followers": 946,
    "following": 743
  },
  {
    "id": 16,
    "name": "Alex Couth",
    "username": "me_alex_couth",
    "email": "alexcouth@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/16",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/16",
    "bio": "Guitarist for the band Jess Music",
    "gender": "Masculino",
    "birthdate": "13-10-1998",
    "country": "EUA",
    "location": "Ohio, OH",
    "verified": false,
    "followers": 1762,
    "following": 1236
  },
  {
    "id": 17,
    "name": "Otávio Alencar",
    "username": "otavio",
    "email": "otavio@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/17",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/17",
    "bio": "Advogado e CEO da @alencar_variedades",
    "gender": "Masculino",
    "birthdate": "16-03-1985",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": true,
    "followers": 49736,
    "following": 1549
  },
  {
    "id": 18,
    "name": "Camille Lemaire",
    "username": "lemaire_camille",
    "email": "camille5lemaire@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/18",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/18",
    "bio": "Biomédecine à l'Université PSL",
    "gender": "Feminino",
    "birthdate": "05-06-1996",
    "country": "França",
    "location": "Centre-Val de Loire, CVL",
    "verified": false,
    "followers": 683,
    "following": 549
  },
  {
    "id": 19,
    "name": "Amanda Collins",
    "username": "amanda",
    "email": "amandacollins@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/19",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/19",
    "bio": "Anchor of @jornal7",
    "gender": "Feminino",
    "birthdate": "21-05-1992",
    "country": "Canada",
    "location": "Quebec, QC",
    "verified": true,
    "followers": 64259,
    "following": 2648
  },
  {
    "id": 20,
    "name": "Leticia Monez",
    "username": "le_monez",
    "email": "leticiamonez9@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/20",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/20",
    "bio": "@fernando_alcantara💍",
    "gender": "Feminino",
    "birthdate": "23-11-2003",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 729,
    "following": 486
  },
  {
    "id": 21,
    "name": "Maria Neiva",
    "username": "maria20",
    "email": "neivamaria@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/21",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/21",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "02-04-1986",
    "country": "Brasil",
    "location": "Amazonas, AM",
    "verified": false,
    "followers": 249,
    "following": 367
  },
  {
    "id": 22,
    "name": "Виктор Карпов",
    "username": "Я_Виктор",
    "email": "Виктор@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/22",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/22",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "18-02-2003",
    "country": "Russia",
    "location": "Moscou, MOW",
    "verified": false,
    "followers": 2486,
    "following": 1689
  },
  {
    "id": 23,
    "name": "Caroline Smith",
    "username": "caroline_smith7",
    "email": "smithcaroline@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/23",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/23",
    "bio": "Biomedicina 4/6",
    "gender": "Feminino",
    "birthdate": "24-08-1999",
    "country": "Brasil",
    "location": "Piauí, PI",
    "verified": false,
    "followers": 823,
    "following": 976
  },
  {
    "id": 24,
    "name": "Jeferson Guimarães",
    "username": "vc_jeferson",
    "email": "jeferson@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/24",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/24",
    "bio": "Vocalista da banda melo.",
    "gender": "Masculino",
    "birthdate": "28-05-1997",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": true,
    "followers": 28493,
    "following": 3569
  },
  {
    "id": 25,
    "name": "Julia Farias",
    "username": "ju_farias",
    "email": "jufarias@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/25",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/25",
    "bio": "I am a butterfly",
    "gender": "Feminino",
    "birthdate": "06-03-2000",
    "country": "Brasil",
    "location": "Goiás, GO",
    "verified": false,
    "followers": 1863,
    "following": 2045
  },
  {
    "id": 26,
    "name": "Matheus Ferreira",
    "username": "matheus_ferreira",
    "email": "ferreiramatheus@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/26",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/26",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "19-03-2001",
    "country": "Brasil",
    "location": "Bahia, BA",
    "verified": false,
    "followers": 729,
    "following": 849
  },
  {
    "id": 27,
    "name": "Adriana Matias",
    "username": "adri_matias",
    "email": "matiasadriana8@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/27",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/27",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "03-04-1994",
    "country": "Brasil",
    "location": "Mato Grosso, MT",
    "verified": false,
    "followers": 1063,
    "following": 856
  },
  {
    "id": 28,
    "name": "Júlio Campos",
    "username": "eu_julio",
    "email": "juliocampos30@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/28",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/28",
    "bio": "Jogador",
    "gender": "Masculino",
    "birthdate": "15-06-1998",
    "country": "Brasil",
    "location": "Minas Gerais, MG",
    "verified": false,
    "followers": 487,
    "following": 538
  },
  {
    "id": 29,
    "name": "Luciano Primo",
    "username": "luciano_primo7",
    "email": "primoluciano@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/29",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/29",
    "bio": "Programador C++",
    "gender": "Masculino",
    "birthdate": "18-01-1992",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 1643,
    "following": 1467
  },
  {
    "id": 30,
    "name": "Tadeu Trindade",
    "username": "tadeu_trindade",
    "email": "trindadetadeu@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/30",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/30",
    "bio": "A vida é curta de mais para não se ariscar.",
    "gender": "Masculino",
    "birthdate": "13-04-1993",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 2486,
    "following": 2136
  },
  {
    "id": 31,
    "name": "Santiago Gárcia",
    "username": "sant_01",
    "email": "garciasant@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/31",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/31",
    "bio": "El trabajo duro es un trabajo bien hecho.",
    "gender": "Masculino",
    "birthdate": "01-03-1983",
    "country": "Mexico",
    "location": "Jalisco, JAL",
    "verified": false,
    "followers": 1021,
    "following": 986
  },
  {
    "id": 32,
    "name": "Jasper Walter",
    "username": "jas_walter",
    "email": "jasperwalter@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/32",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/32",
    "bio": "Musician, DJ and composer",
    "gender": "Masculino",
    "birthdate": "06-04-1998",
    "country": "Canada",
    "location": "Colombia, CO",
    "verified": false,
    "followers": 5463,
    "following": 1578
  },
  {
    "id": 33,
    "name": "Kauê Matos",
    "username": "eu_kaue",
    "email": "matoskaue@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/33",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/33",
    "bio": "Fotógrafo por paixão e artista nas horas vagas",
    "gender": "Masculino",
    "birthdate": "15-04-2000",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 1069,
    "following": 1102
  },
  {
    "id": 34,
    "name": "Otávio Lucas",
    "username": "otavio0",
    "email": "lucasotavio@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/34",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/34",
    "bio": "Garçon da CSS Sabores",
    "gender": "Masculino",
    "birthdate": "25-03-1994",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 948,
    "following": 532 
  },
  {
    "id": 35,
    "name": "Sandra Dantas",
    "username": "sandra_dantas",
    "email": "dantassandra8@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/35",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/35",
    "bio": "Supervisora da Real Moda Feminina",
    "gender": "Feminino",
    "birthdate": "05-06-1992",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 4723,
    "following": 1568
  },
  {
    "id": 36,
    "name": "Pedro Machado",
    "username": "pedro8",
    "email": "machadopedro8@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/36",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/36",
    "bio": "Be you",
    "gender": "Masculino",
    "birthdate": "05-02-1986",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 498,
    "following": 648
  },
  {
    "id": 37,
    "name": "Carlos Abraão",
    "username": "eu_carlinhos",
    "email": "carlosabraao@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/37",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/37",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "08-03-1991",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 894,
    "following": 745
  },
  {
    "id": 38,
    "name": "Pedro Loss",
    "username": "pedro_loss",
    "email": "losspedro9@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/38",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/38",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "07-05-2002",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 1423,
    "following": 946
  },
  {
    "id": 39,
    "name": "Fabíola Martins",
    "username": "fa_martins0",
    "email": "martinsfabiola0@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/39",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/39",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "03-03-1996",
    "country": "Brasil",
    "location": "Bahia, BA",
    "verified": false,
    "followers": 486,
    "following": 532
  },
  {
    "id": 40,
    "name": "Maria de Fátima Cardoso",
    "username": "maria_cardoso",
    "email": "mariadefatima50@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/40",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/40",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "24-04-1982",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 649,
    "following": 438
  },
  {
    "id": 41,
    "name": "Letícia Ferraz",
    "username": "leh7",
    "email": "ferrazleticia7@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/41",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/41",
    "bio": "Be you kind, be yourself",
    "gender": "Feminino",
    "birthdate": "23-05-2001",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 1426,
    "following": 930
  },
  {
    "id": 42,
    "name": "Carolina Carpenter",
    "username": "carolilna_carpenter",
    "email": "carpentercarolina@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/42",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/42",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "10-06-2002",
    "country": "Brasil",
    "location": "Espirito Santos, ES",
    "verified": false,
    "followers": 746,
    "following": 549
  },
  {
    "id": 43,
    "name": "Vincent Bauboa",
    "username": "vincent",
    "email": "bauboavincent@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/43",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/43",
    "bio": "Artist, musician and composer",
    "gender": "Masculino",
    "birthdate": "18-09-1998",
    "country":"'EUA",
    "location": "California, CA",
    "verified": true,
    "followers": 243726,
    "following": 3126
  },
  {
    "id": 44,
    "name": "Ludmila Melo",
    "username": "luh_melo",
    "email": "ludmilamelo30@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/44",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/44",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "13-01-1997",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 3612,
    "following": 2914
  },
  {
    "id": 45,
    "name": "Thiago Machado",
    "username": "thiago_machado0",
    "email": "machadothiago@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/45",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/45",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "18-03-1995",
    "country": "Brasil",
    "location": "Minas Gerais, MG",
    "verified": false,
    "followers": 1539,
    "following": 894
  },
  {
    "id": 46,
    "name": "Andressa Fernandes",
    "username": "drê_fernandes",
    "email": "andressafernandes9@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/46",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/46",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "07-08-1998",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 649,
    "following": 596
  },
  {
    "id": 47,
    "name": "Mario Alves",
    "username": "mario_alves",
    "email": "alvesmario@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/47",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/47",
    "bio": "Artista",
    "gender": "Masculino",
    "birthdate": "05-06-1996",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 893,
    "following": 968
  },
  {
    "id": 48,
    "name": "Amanda Flores",
    "username": "me_amanda0",
    "email": "floresamanda@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/48",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/48",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "05-06-1996",
    "country": "Brasil",
    "location": "Bahia, BA",
    "verified": false,
    "followers": 1368,
    "following": 1126
  },
  {
    "id": 49,
    "name": "Eliot Page",
    "username": "eliot_page",
    "email": "pagealiot@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/49",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/49",
    "bio": "I create some designs",
    "gender": "Masculino",
    "birthdate": "25-10-2005",
    "country": "EUA",
    "location": "Colorado, CO",
    "verified": false,
    "followers": 4688,
    "following": 3997
  },
  {
    "id": 50,
    "name": "Bruce Cane",
    "username": "me_bruce",
    "email": "brucecane@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/50",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/50",
    "bio": "Living the extraordinary",
    "gender": "Masculino",
    "birthdate": "19-07-1992",
    "country": "EUA",
    "location": "Louisiana, LA",
    "verified": false,
    "followers": 1426,
    "following": 1369
  },
  {
    "id": 51,
    "name": "Marcos Benicio",
    "username": "by_marcos",
    "email": "beniciomarcos@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/51",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/51",
    "bio": "Eletricista",
    "gender": "Masculino",
    "birthdate": "16-09-1994",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 839,
    "following": 897
  },
  {
    "id": 52,
    "name": "Lore Macclincy",
    "username": "me_lore",
    "email": "loremacclincy@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/52",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/52",
    "bio": "Creating new horizons",
    "gender": "Feminino",
    "birthdate": "14-08-1992",
    "country": "Canada",
    "location": "Nunavut, NU",
    "verified": false,
    "followers": 1325,
    "following": 1249
  },
  {
    "id": 53,
    "name": "Bruno Silva",
    "username": "bruno09",
    "email": "silvabruno@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/53",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/53",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "13-04-1991",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 493,
    "following": 548
  },
  {
    "id": 54,
    "name": "Bruna Gomes",
    "username": "eu_bruna_gomes",
    "email": "brunagomes20@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/54",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/54",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "26-02-1998",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 1697,
    "following": 846
  },
  {
    "id": 55,
    "name": "Vanda Junqueira",
    "username": "vanda_junqueira",
    "email": "junqueiravanda2@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/55",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/55",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "10-06-1993",
    "country": "Brasil",
    "location": "Bahia, BA",
    "verified": false,
    "followers": 1250,
    "following": 1145
  },
  {
    "id": 56,
    "name": "Mariana Santino",
    "username": "mah_santino",
    "email": "santinomariana@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/56",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/56",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "26-10-1995",
    "country": "Brasil",
    "location": "Brasília, BSB",
    "verified": false,
    "followers": 3978,
    "following": 2943
  },
  {
    "id": 57,
    "name": "Madalena Buarque",
    "username": "a_madah",
    "email": "buarquemadalena@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/57",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/57",
    "bio": "A vida é feita de escolhas, e eu escolho ser feliz 🌈",
    "gender": "Feminino",
    "birthdate": "15-04-1999",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 3478,
    "following": 2946
  },
  {
    "id": 58,
    "name": "Isabella Fliorine",
    "username": "isah_7",
    "email": "fliorineisabella@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/58",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/58",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "17-06-1998",
    "country": "Brasil",
    "location": "Rio de Janeiro, RJ",
    "verified": false,
    "followers": 2648,
    "following": 2543
  },
  {
    "id": 59,
    "name": "Antônio Carlos Magalhâes",
    "username": "antonio_carlos8",
    "email": "carlosantonio8@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/59",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/59",
    "bio": "Engenheiro civíl",
    "gender": "Masculino",
    "birthdate": "09-06-1993",
    "country": "Brasil",
    "location": "Rio de Janeiro, RJ",
    "verified": false,
    "followers": 648,
    "following": 783
  },
  {
    "id": 60,
    "name": "Júlia Rodrigues",
    "username": "juh_rodrigues7",
    "email": "rodriguesjulia@fakemail.com",
    "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/60",
    "banner": "social-toolkit-gamma.vercel.app/api/banner/id/60",
    "bio": "Fotógrafa e social media - I am my best version",
    "gender": "Feminino",
    "birthdate": "12-11-2000",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 5483,
    "following": 3496
  },
  {
    "id": 61,
    "name": "Priscila Campos",
    "username": "priscila_campos",
    "email": "campospri@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/61",
    "bio": "Maquiadora e fotógrafa",
    "gender": "Feminino",
    "birthdate": "15-02-2004",
    "country": "Brasil",
    "location": "Goiás, GO",
    "verified": false,
    "followers": 304,
    "following": 872
  },
  {
    "id": 62,
    "name": "Mário Olinda",
    "username": "mario_olinda7",
    "email": "marioolinda23@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/62",
    "bio": "Cineasta",
    "gender": "Masculino",
    "birthdate": "24-04-1988",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": true,
    "followers": 45782,
    "following": 2783
  },
  {
    "id": 63,
    "name": "César Filho",
    "username": "filho_cesar3",
    "email": "cesarfilho@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/63",
    "bio": "Fotógrafo profissional - FTPhotos ",
    "gender": "Masculino",
    "birthdate": "12-05-1984",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 1832,
    "following": 849
  },
  {
    "id": 64,
    "name": "Otávio Rogério",
    "username": "roh_otavio",
    "email": "otaviorogerio42@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/64",
    "bio": "Consultor de vendas",
    "gender": "Masculino",
    "birthdate": "24-08-1999",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 2736,
    "following": 1086
  },
  {
    "id": 65,
    "name": "Herry Willians",
    "username": "herry_willians",
    "email": "williansherry@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/65",
    "bio": "CEO of Jailbreak Consortia",
    "gender": "Masculino",
    "birthdate": "27-06-1988",
    "country": "Inglaterra",
    "location": "Greater London, GL",
    "verified": true,
    "followers": 26783,
    "following": 3412
  },
  {
    "id": 66,
    "name": "Ricardo Santos",
    "username": "santos_ricardo",
    "email": "santosricardo36@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/66",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "14-03-1998",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 2034,
    "following": 1689
  },
  {
    "id": 67,
    "name": "Mauricio Sousa",
    "username": "mauricio23",
    "email": "sousamauricio23@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/67",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "16-08-1994",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 2043,
    "following": 1869
  },
  {
    "id": 68,
    "name": "Amelia Olivia",
    "username": "me_amelia7",
    "email": "oliviaamelia20@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/68",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "24-10-1997",
    "country": "Inglaterra",
    "location": "West Midlands, WM",
    "verified": false,
    "followers": 678,
    "following": 539
  },
  {
    "id": 69,
    "name": "João Pedro Silva",
    "username": "joaopedro_silva",
    "email": "pedrojoao21@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/69",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "12-05-1999",
    "country": "Brasil",
    "location": "Minas Gerais, MG",
    "verified": false,
    "followers": 786,
    "following": 645
  },
  {
    "id": 70,
    "name": "Татьяна Анастасия",
    "username": "тати_анастасия",
    "email": "анастасиятатьяна@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/70",
    "bio": "Мне нравятся книги, литература, тишина и покой.",
    "gender": "Feminino",
    "birthdate": "03-02-2001",
    "country": "Russia",
    "location": "Санкт-Петербург, SPB",
    "verified": false,
    "followers": 1432,
    "following": 1203
  },
  {
    "id": 71,
    "name": "Alessandra Dumon",
    "username": "aleh_dumon",
    "email": "dumonaleh8@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/71",
    "bio": "Em constante aprendizado",
    "gender": "Feminino",
    "birthdate": "25-10-1997",
    "country": "Brasil",
    "location": "Paraná, PR",
    "verified": false,
    "followers": 3412,
    "following": 1723
  },
  {
    "id": 72,
    "name": "Melinda Andrades",
    "username": "a_melinda",
    "email": "andradesmelinda10@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/72",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "26-09-2001",
    "country": "Brasil",
    "location": "Santa Catarina, SC",
    "verified": false,
    "followers": 4123,
    "following": 2306
  },
  {
    "id": 73,
    "name": "薇薇安",
    "username": "薇薇安_72",
    "email": "薇薇安72@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/73",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/73",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "06-04-1993",
    "country": "China",
    "location": "Taiwan, TW",
    "verified": false,
    "followers": 1423,
    "following": 946
  },
  {
    "id": 74,
    "name": "Sora Hana",
    "username": "sora_hana",
    "email": "hanasora@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/74",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/74",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "15-02-2000",
    "country": "Coreia do Sul",
    "location": "Gyeonggi, KR-41",
    "verified": false,
    "followers": 3024,
    "following": 1856
  },
  {
    "id": 75,
    "name": "Min-jun",
    "username": "min_jun21",
    "email": "minjun21@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/75",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/75",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "18-06-2002",
    "country": "Coreia do Sul",
    "location": "Seul, SEL",
    "verified": false,
    "followers": 2014,
    "following": 1576
  },
  {
    "id": 76,
    "name": "Si-woo",
    "username": "si_woo20",
    "email": "siwoo746@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/76",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/76",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "15-04-1995",
    "country": "Coreia do Sul",
    "location": "Seul, SEL",
    "verified": false,
    "followers": 1246,
    "following": 978
  },
  {
    "id": 77,
    "name": "Kin-juh",
    "username": "kin_juh",
    "email": "kinjuh@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/77",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/77",
    "bio": "CEO: korea_translations",
    "gender": "Masculino",
    "birthdate": "15-03-1994",
    "country": "Coreia do Sul",
    "location": "Gyeonggi, KR-41",
    "verified": false,
    "followers": 1546,
    "following": 1234
  },
  {
    "id": 78,
    "name": "Talyta Amorin",
    "username": "me_talyta",
    "email": "talytaamorin@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/78",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/78",
    "bio": "",
    "gender": "Feminino",
    "birthdate": "15-05-1997",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": true,
    "followers": 48623,
    "following": 4283
  },
  {
    "id": 79,
    "name": "Lidya Santinon",
    "username": "eu_lydia",
    "email": "santinonlidya@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/79",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/79",
    "bio": "Sois simplement toi-même.",
    "gender": "Feminino",
    "birthdate": "10-02-1998",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 1234,
    "following": 869
  },
  {
    "id": 80,
    "name": "Santiago Dantas",
    "username": "ele_santiago",
    "email": "santiagodantas@fakemail.com",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/80",
    "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/80",
    "bio": "",
    "gender": "Masculino",
    "birthdate": "18-03-1994",
    "country": "Brasil",
    "location": "São Paulo, SP",
    "verified": false,
    "followers": 1243,
    "following": 1563
  }
]
</pre>
</details>

<br>

**Retorna todas as usuárias femininas da API**

```
social-toolkit-gamma.vercel.app/api/fakeUser/all/gender/f
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
  [
    {
        "id": 4,
        "name": "Jessica Pereira",
        "username": "me_jess",
        "email": "pereirajess@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/4",
        "bio": "Be your best version💕",
        "gender": "Feminino",
        "birthdate": "22-06-2000",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 384,
        "following": 362
    },
    {
        "id": 5,
        "name": "Juliana Lima",
        "username": "ju_lima",
        "email": "julima@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/5",
        "bio": "A visão das estrelas me fazem sonhar",
        "gender": "Feminino",
        "birthdate": "18-10-1998",
        "country": "Brasil",
        "location": "Mato Grosso, MT",
        "verified": false,
        "followers": 122,
        "following": 217
    },
    {
        "id": 6,
        "name": "Stefany Lindsay",
        "username": "stef_lindsay",
        "email": "lindsaystef@fakemail.com",
        ""avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/6",
        "bio": "Photographer and designer",
        "gender": "Feminino",
        "birthdate": "25-10-2002",
        "country": "EUA",
        "location": "Kansas, KS",
        "verified": false,
        "followers": 687,
        "following": 627
    },
    {
        "id": 8,
        "name": "Agatha Guilmesh",
        "username": "aghata",
        "email": "guimeshaghata@fakemail.com",
        ""avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/8",
        "bio": "Dancing amidst the chaos - Songwriter and singer",
        "gender": "Feminino",
        "birthdate": "14-04-1993",
        "country": "Canada",
        "location": "Ontário, ON",
        "verified": true,
        "followers": 195849,
        "following": 2489
    },
    {
        "id": 9,
        "name": "Alessandra Melchior",
        "username": "melchior_ale",
        "email": "ale45melchior@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/9",
        "bio": "Além das aparências",
        "gender": "Feminino",
        "birthdate": "12-05-2000",
        "country": "Brasil",
        "location": "Brasília, BSB",
        "verified": false,
        "followers": 5436,
        "following": 3789
    },
    {
        "id": 10,
        "name": "Emily Garcia",
        "username": "emily_garcia",
        "email": "garciaemily@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/10",
        "bio": "Sou louca pelo o que me fascina",
        "gender": "Feminino",
        "birthdate": "26-08-2001",
        "country": "Brasil",
        "location": "Paraná, PR",
        "verified": false,
        "followers": 1374,
        "following": 946
    },
    {
        "id": 11,
        "name": "Nataly Lima",
        "username": "eu_nataly_lima",
        "email": "limanataly8@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/11",
        "bio": "Violinista no tempo livre",
        "gender": "Feminino",
        "birthdate": "06-03-2001",
        "country": "Brasil",
        "location": "Pernambuco, PE",
        "verified": false,
        "followers": 763,
        "following": 842
    },
    {
        "id": 12,
        "name": "Giulia Bianchi",
        "username": "giulia",
        "email": "giuliabianchi@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/12",
        "bio": "Madre di @franchesca, cantante per amore",
        "gender": "Feminino",
        "birthdate": "18-07-1995",
        "country": "Italia",
        "location": "Aosta Valley, VDA",
        "verified": true,
        "followers": 86579,
        "following": 6792
    },
    {
        "id": 13,
        "name": "Larissa Melo",
        "username": "lari_melo",
        "email": "melolarissa6@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/13",
        "bio": "Inefável💜",
        "gender": "Feminino",
        "birthdate": "28-05-2005",
        "country": "Brasil",
        "location": "Santa Catarina, SC",
        "verified": false,
        "followers": 2786,
        "following": 983
    },
    {
        "id": 14,
        "name": "Sharow Mustang",
        "username": "sharow_mustang",
        "email": "sharowmustang@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/14",
        "bio": "Experience🎶",
        "gender": "Feminino",
        "birthdate": "24-08-1993",
        "country": "EUA",
        "location": "Virgia, VA",
        "verified": false,
        "followers": 1372,
        "following": 1298
    },
    {
        "id": 15,
        "name": "Hanna Lange",
        "username": "ich_hanna",
        "email": "hannalange@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/15",
        "bio": "Wagen Sie sich ins Leben",
        "gender": "Feminino",
        "birthdate": "03-01-2003",
        "country": "Alemanha",
        "location": "Hessen, HE",
        "verified": false,
        "followers": 946,
        "following": 743
    },
    {
        "id": 18,
        "name": "Camille Lemaire",
        "username": "lemaire_camille",
        "email": "camille5lemaire@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/18",
        "bio": "Biomédecine à l'Université PSL",
        "gender": "Feminino",
        "birthdate": "05-06-1996",
        "country": "França",
        "location": "Centre-Val de Loire, CVL",
        "verified": false,
        "followers": 683,
        "following": 549
    },
    {
        "id": 19,
        "name": "Amanda Collins",
        "username": "amanda",
        "email": "amandacollins@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/19",
        "bio": "Anchor of @jornal7",
        "gender": "Feminino",
        "birthdate": "21-05-1992",
        "country": "Canada",
        "location": "Quebec, QC",
        "verified": true,
        "followers": 64259,
        "following": 2648
    },
    {
        "id": 20,
        "name": "Leticia Monez",
        "username": "le_monez",
        "email": "leticiamonez9@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/20",
        "bio": "@fernando_alcantara💍",
        "gender": "Feminino",
        "birthdate": "23-11-2003",
        "country": "Brasil",
        "location": "Santa Catarina, SC",
        "verified": false,
        "followers": 729,
        "following": 486
    },
    {
        "id": 21,
        "name": "Maria Neiva",
        "username": "maria20",
        "email": "neivamaria@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/21",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "02-04-1986",
        "country": "Brasil",
        "location": "Amazonas, AM",
        "verified": false,
        "followers": 249,
        "following": 367
    },
    {
        "id": 23,
        "name": "Caroline Smith",
        "username": "caroline_smith7",
        "email": "smithcaroline@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/23",
        "bio": "Biomedicina 4/6",
        "gender": "Feminino",
        "birthdate": "24-08-1999",
        "country": "Brasil",
        "location": "Piauí, PI",
        "verified": false,
        "followers": 823,
        "following": 976
    },
    {
        "id": 25,
        "name": "Julia Farias",
        "username": "ju_farias",
        "email": "jufarias@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/25",
        "bio": "I am a butterfly",
        "gender": "Feminino",
        "birthdate": "06-03-2000",
        "country": "Brasil",
        "location": "Goiás, GO",
        "verified": false,
        "followers": 1863,
        "following": 2045
    },
    {
        "id": 27,
        "name": "Adriana Matias",
        "username": "adri_matias",
        "email": "matiasadriana8@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/27",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "03-04-1994",
        "country": "Brasil",
        "location": "Mato Grosso, MT",
        "verified": false,
        "followers": 1063,
        "following": 856
    },
    {
        "id": 35,
        "name": "Sandra Dantas",
        "username": "sandra_dantas",
        "email": "dantassandra8@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/35",
        "bio": "Supervisora da Real Moda Feminina",
        "gender": "Feminino",
        "birthdate": "05-06-1992",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 4723,
        "following": 1568
    },
    {
        "id": 39,
        "name": "Fabíola Martins",
        "username": "fa_martins0",
        "email": "martinsfabiola0@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/39",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "03-03-1996",
        "country": "Brasil",
        "location": "Bahia, BA",
        "verified": false,
        "followers": 486,
        "following": 532
    },
    {
        "id": 40,
        "name": "Maria de Fátima Cardoso",
        "username": "maria_cardoso",
        "email": "mariadefatima50@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/40",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "24-04-1982",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 649,
        "following": 438
    },
    {
        "id": 41,
        "name": "Letícia Ferraz",
        "username": "leh7",
        "email": "ferrazleticia7@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/41",
        "bio": "Be you kind, be yourself",
        "gender": "Feminino",
        "birthdate": "23-05-2001",
        "country": "Brasil",
        "location": "Santa Catarina, SC",
        "verified": false,
        "followers": 1426,
        "following": 930
    },
    {
        "id": 42,
        "name": "Carolina Carpenter",
        "username": "carolilna_carpenter",
        "email": "carpentercarolina@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/42",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "10-06-2002",
        "country": "Brasil",
        "location": "Espirito Santos, ES",
        "verified": false,
        "followers": 746,
        "following": 549
    },
    {
        "id": 44,
        "name": "Ludmila Melo",
        "username": "luh_melo",
        "email": "ludmilamelo30@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/44",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "13-01-1997",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 3612,
        "following": 2914
    },
    {
        "id": 46,
        "name": "Andressa Fernandes",
        "username": "drê_fernandes",
        "email": "andressafernandes9@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/46",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "07-08-1998",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 649,
        "following": 596
    },
    {
        "id": 48,
        "name": "Amanda Flores",
        "username": "me_amanda0",
        "email": "floresamanda@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/48",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "05-06-1996",
        "country": "Brasil",
        "location": "Bahia, BA",
        "verified": false,
        "followers": 1368,
        "following": 1126
    },
    {
        "id": 52,
        "name": "Lore Macclincy",
        "username": "me_lore",
        "email": "loremacclincy@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/52",
        "bio": "Creating new horizons",
        "gender": "Feminino",
        "birthdate": "14-08-1992",
        "country": "Canada",
        "location": "Nunavut, NU",
        "verified": false,
        "followers": 1325,
        "following": 1249
    },
    {
        "id": 54,
        "name": "Bruna Gomes",
        "username": "eu_bruna_gomes",
        "email": "brunagomes20@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/54",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/54",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "26-02-1998",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 1697,
        "following": 846
    },
    {
        "id": 55,
        "name": "Vanda Junqueira",
        "username": "vanda_junqueira",
        "email": "junqueiravanda2@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/55",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "10-06-1993",
        "country": "Brasil",
        "location": "Bahia, BA",
        "verified": false,
        "followers": 1250,
        "following": 1145
    },
    {
        "id": 56,
        "name": "Mariana Santino",
        "username": "mah_santino",
        "email": "santinomariana@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/56",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "26-10-1995",
        "country": "Brasil",
        "location": "Brasília, BSB",
        "verified": false,
        "followers": 3978,
        "following": 2943
    },
    {
        "id": 57,
        "name": "Madalena Buarque",
        "username": "a_madah",
        "email": "buarquemadalena@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/57",
        "bio": "A vida é feita de escolhas, e eu escolho ser feliz 🌈",
        "gender": "Feminino",
        "birthdate": "15-04-1999",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 3478,
        "following": 2946
    },
    {
        "id": 58,
        "name": "Isabella Fliorine",
        "username": "isah_7",
        "email": "fliorineisabella@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/58",
        "bio": "",
        "gender": "Feminino",
        "birthdate": "17-06-1998",
        "country": "Brasil",
        "location": "Rio de Janeiro, RJ",
        "verified": false,
        "followers": 2648,
        "following": 2543
    },
    {
        "id": 60,
        "name": "Júlia Rodrigues",
        "username": "juh_rodrigues7",
        "email": "rodriguesjulia@fakemail.com",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60",
        "banner": "https://social-toolkit-gamma.vercel.app/api/banner/id/60",
        "bio": "Fotógrafa e social media - I am my best version",
        "gender": "Feminino",
        "birthdate": "12-11-2000",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 5483,
        "following": 3496
    }
]
</pre>
</details>

<br>

**Retorna todos os usuários masculinos da API**

```
social-toolkit-gamma.vercel.app/api/fakeUser/all/gender/m
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
  [
    {
        "id": 1,
        "name": "Lucas Ferreira",
        "username": "eu_lucas",
        "email": "lucas@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/1",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/1",
        "bio": "Viva como se não ouvesse amanhâ.",
        "gender": "Masculino",
        "birthdate": "25-07-1972",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 5486,
        "following": 542
    },
    {
        "id": 2,
        "name": "Jeferson Albuquerque",
        "username": "eu_jef",
        "email": "jefalbuquerque@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/2",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/2",
        "bio": "Violinista, adoro musicas🎶",
        "gender": "Masculino",
        "birthdate": "14-08-1992",
        "country": "Brasil",
        "location": "Bahia, BA",
        "verified": false,
        "followers": 542,
        "following": 438
    },
    {
        "id": 3,
        "name": "Ravi Ramesh",
        "username": "ravi_ramesh",
        "email": "ravi@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/3",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/3",
        "bio": "रमेश इंडस्ट्रीज लिमिटेड के सीईओ",
        "gender": "Masculino",
        "birthdate": "15-04-1995",
        "country": "India",
        "location": "Assam, AS",
        "verified": false,
        "followers": 876,
        "following": 852
    },
    {
        "id": 7,
        "name": "Thiago Silva",
        "username": "coronel_thiagosilva",
        "email": "thiagosilva@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/7",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/7",
        "bio": "A pressa é inimiga da perfeição",
        "gender": "Masculino",
        "birthdate": "21-06-1991",
        "country": "Brasil",
        "location": "Paraná, PR",
        "verified": false,
        "followers": 2435,
        "following": 1239
    },
    {
        "id": 16,
        "name": "Alex Couth",
        "username": "me_alex_couth",
        "email": "alexcouth@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/16",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/16",
        "bio": "Guitarist for the band Jess Music",
        "gender": "Masculino",
        "birthdate": "13-10-1998",
        "country": "EUA",
        "location": "Ohio, OH",
        "verified": false,
        "followers": 1762,
        "following": 1236
    },
    {
        "id": 17,
        "name": "Otávio Alencar",
        "username": "otavio",
        "email": "otavio@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/17",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/17",
        "bio": "Advogado e CEO da @alencar_variedades",
        "gender": "Masculino",
        "birthdate": "16-03-1985",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": true,
        "followers": 49736,
        "following": 1549
    },
    {
        "id": 22,
        "name": "Виктор Карпов",
        "username": "Я_Виктор",
        "email": "Виктор@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/22",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/22",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "18-02-2003",
        "country": "Russia",
        "location": "Moscou, MOW",
        "verified": false,
        "followers": 2486,
        "following": 1689
    },
    {
        "id": 24,
        "name": "Jeferson Guimarães",
        "username": "vc_jeferson",
        "email": "jeferson@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/24",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/24",
        "bio": "Vocalista da banda melo.",
        "gender": "Masculino",
        "birthdate": "28-05-1997",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": true,
        "followers": 28493,
        "following": 3569
    },
    {
        "id": 26,
        "name": "Matheus Ferreira",
        "username": "matheus_ferreira",
        "email": "ferreiramatheus@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/26",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/26",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "19-03-2001",
        "country": "Brasil",
        "location": "Bahia, BA",
        "verified": false,
        "followers": 729,
        "following": 849
    },
    {
        "id": 28,
        "name": "Júlio Campos",
        "username": "eu_julio",
        "email": "juliocampos30@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/28",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/28",
        "bio": "Jogador",
        "gender": "Masculino",
        "birthdate": "15-06-1998",
        "country": "Brasil",
        "location": "Minas Gerais, MG",
        "verified": false,
        "followers": 487,
        "following": 538
    },
    {
        "id": 29,
        "name": "Luciano Primo",
        "username": "luciano_primo7",
        "email": "primoluciano@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/29",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/29",
        "bio": "Programador C++",
        "gender": "Masculino",
        "birthdate": "18-01-1992",
        "country": "Brasil",
        "location": "Paraná, PR",
        "verified": false,
        "followers": 1643,
        "following": 1467
    },
    {
        "id": 30,
        "name": "Tadeu Trindade",
        "username": "tadeu_trindade",
        "email": "trindadetadeu@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/30",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/30",
        "bio": "A vida é curta de mais para não se ariscar.",
        "gender": "Masculino",
        "birthdate": "13-04-1993",
        "country": "Brasil",
        "location": "Santa Catarina, SC",
        "verified": false,
        "followers": 2486,
        "following": 2136
    },
    {
        "id": 31,
        "name": "Santiago Gárcia",
        "username": "sant_01",
        "email": "garciasant@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/31",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/31",
        "bio": "El trabajo duro es un trabajo bien hecho.",
        "gender": "Masculino",
        "birthdate": "01-03-1983",
        "country": "Mexico",
        "location": "Jalisco, JAL",
        "verified": false,
        "followers": 1021,
        "following": 986
    },
    {
        "id": 32,
        "name": "Jasper Walter",
        "username": "jas_walter",
        "email": "jasperwalter@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/32",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/32",
        "bio": "Musician, DJ and composer",
        "gender": "Masculino",
        "birthdate": "06-04-1998",
        "country": "Canada",
        "location": "Colombia, CO",
        "verified": false,
        "followers": 5463,
        "following": 1578
    },
    {
        "id": 33,
        "name": "Kauê Matos",
        "username": "eu_kaue",
        "email": "matoskaue@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/33",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/33",
        "bio": "Fotógrafo por paixão e artista nas horas vagas",
        "gender": "Masculino",
        "birthdate": "15-04-2000",
        "country": "Brasil",
        "location": "Santa Catarina, SC",
        "verified": false,
        "followers": 1069,
        "following": 1102
    },
    {
        "id": 34,
        "name": "Otávio Lucas",
        "username": "otavio0",
        "email": "lucasotavio@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/34",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/34",
        "bio": "Garçon da CSS Sabores",
        "gender": "Masculino",
        "birthdate": "25-03-1994",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 948,
        "following": 532
    },
    {
        "id": 36,
        "name": "Pedro Machado",
        "username": "pedro8",
        "email": "machadopedro8@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/36",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/36",
        "bio": "Be you",
        "gender": "Masculino",
        "birthdate": "05-02-1986",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 498,
        "following": 648
    },
    {
        "id": 37,
        "name": "Carlos Abraão",
        "username": "eu_carlinhos",
        "email": "carlosabraao@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/37",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/37",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "08-03-1991",
        "country": "Brasil",
        "location": "Paraná, PR",
        "verified": false,
        "followers": 894,
        "following": 745
    },
    {
        "id": 38,
        "name": "Pedro Loss",
        "username": "pedro_loss",
        "email": "losspedro9@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/38",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/38",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "07-05-2002",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 1423,
        "following": 946
    },
    {
        "id": 43,
        "name": "Vincent Bauboa",
        "username": "vincent",
        "email": "bauboavincent@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/43",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/43",
        "bio": "Artist, musician and composer",
        "gender": "Masculino",
        "birthdate": "18-09-1998",
        "country": "'EUA",
        "location": "California, CA",
        "verified": true,
        "followers": 243726,
        "following": 3126
    },
    {
        "id": 45,
        "name": "Thiago Machado",
        "username": "thiago_machado0",
        "email": "machadothiago@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/45",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/45",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "18-03-1995",
        "country": "Brasil",
        "location": "Minas Gerais, MG",
        "verified": false,
        "followers": 1539,
        "following": 894
    },
    {
        "id": 47,
        "name": "Mario Alves",
        "username": "mario_alves",
        "email": "alvesmario@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/47",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/47",
        "bio": "Artista",
        "gender": "Masculino",
        "birthdate": "05-06-1996",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 893,
        "following": 968
    },
    {
        "id": 49,
        "name": "Eliot Page",
        "username": "eliot_page",
        "email": "pagealiot@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/49",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/49",
        "bio": "I create some designs",
        "gender": "Masculino",
        "birthdate": "25-10-2005",
        "country": "EUA",
        "location": "Colorado, CO",
        "verified": false,
        "followers": 4688,
        "following": 3997
    },
    {
        "id": 50,
        "name": "Bruce Cane",
        "username": "me_bruce",
        "email": "brucecane@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/50",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/50",
        "bio": "Living the extraordinary",
        "gender": "Masculino",
        "birthdate": "19-07-1992",
        "country": "EUA",
        "location": "Louisiana, LA",
        "verified": false,
        "followers": 1426,
        "following": 1369
    },
    {
        "id": 51,
        "name": "Marcos Benicio",
        "username": "by_marcos",
        "email": "beniciomarcos@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/51",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/51",
        "bio": "Eletricista",
        "gender": "Masculino",
        "birthdate": "16-09-1994",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 839,
        "following": 897
    },
    {
        "id": 53,
        "name": "Bruno Silva",
        "username": "bruno09",
        "email": "silvabruno@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/53",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/53",
        "bio": "",
        "gender": "Masculino",
        "birthdate": "13-04-1991",
        "country": "Brasil",
        "location": "São Paulo, SP",
        "verified": false,
        "followers": 493,
        "following": 548
    },
    {
        "id": 59,
        "name": "Antônio Carlos Magalhâes",
        "username": "antonio_carlos8",
        "email": "carlosantonio8@fakemail.com",
        "avatar": "social-toolkit-gamma.vercel.app/api/avatar/id/59",
        "banner": "social-toolkit-gamma.vercel.app/api/banner/id/59",
        "bio": "Engenheiro civíl",
        "gender": "Masculino",
        "birthdate": "09-06-1993",
        "country": "Brasil",
        "location": "Rio de Janeiro, RJ",
        "verified": false,
        "followers": 648,
        "following": 783
    }
]
</pre>
</details>

<br>

## Geração de avatares

**Gera um avatar aleatório**

```
social-toolkit-gamma.vercel.app/api/avatar/random
```
<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/images/photo39.png" width="100" height="100">
</pre>
</details>

<br>

**Gera um avatar aleatório feminino**

```
social-toolkit-gamma.vercel.app/api/avatar/random/gender/f
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/images/photo09.png" width="100" height="100">
</pre>
</details>

<br>

**Gera um avatar aleatório masculino**

```
social-toolkit-gamma.vercel.app/api/avatar/random/gender/m
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/images/photo47.png" width="100" height="100">
</pre>
</details>

<br>

**Busca um avatar pelo ID**

```
social-toolkit-gamma.vercel.app/api/avatar/id/1
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/images/photo01.png" width="100" height="100">
</pre>
</details>

<br>

## Geração de banners

**Gera um banner aleatório**

```
social-toolkit-gamma.vercel.app/api/banner/random
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/banners/banner17.png" width="200" height="100">
</pre>
</details>

<br>

**Busca um banner pelo ID**

```
social-toolkit-gamma.vercel.app/api/banner/id/1
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
<img src="/public/banners/banner01.png" width="200" height="100">
</pre>
</details>

<br>

## Geração de postagens fakes

**Gera uma postagem aleatória**

```
social-toolkit-gamma.vercel.app/api/post/random
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
{
  "id": 29,
  "author": {
    "id": 6,
    "name": "Stefany Lindsay",
    "username": "@stef_lindsay",
    "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
  },
    "content": "Sometimes the best inspiration comes from nature. Fresh air, colors, textures... pure art. 🍃🎨",
    "hashtags": ["#inspiration", "#nature", "#artistlife"],
    "createdAt": "2025-03-05T12:40:00Z",
    "likes": 167,
    "comments": 30
}    
</pre>
</details>

<br>

**Busca uma postagem aleatória de um usuário**

```
social-toolkit-gamma.vercel.app/api/post/random/user/aghata
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
  {
    "id": 40,
    "author": {
      "id": 8,
      "name": "Agatha Guilmesh",
      "username": "@aghata",
      "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
    },
      "content": "Can’t wait to share my upcoming music video with you all! 🎬✨ Stay tuned!",
      "hashtags": ["#musicvideo", "#comingsoon", "#excited"],
      "createdAt": "2025-03-16T16:10:00Z",
      "likes": 12980,
      "comments": 708
  }
</pre>
</details>

<br>

**Retorna todas as postagens da API**

```
social-toolkit-gamma.vercel.app/api/post/all
```

<details>
<summary><b>Exemplo de retorno:</b></summary>
<pre>
  [
    {
        "id": 1,
        "author": {
            "id": 1,
            "name": "Lucas Ferreira",
            "username": "@eu_lucas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1"
        },
        "content": "Hoje, celebrei meu aniversário com minha família. O que tenho a dizer é somente gratidão.",
        "hashtags": ["#familia", "#aniversario", "#felicidade"],
        "createdAt": "2025-05-16T08:30:00Z",
        "likes": 468,
        "comments": 43
    },
    {
        "id": 2,
        "author": {
            "id": 1,
            "name": "Lucas Ferreira",
            "username": "@eu_lucas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1"
        },
        "content": "Dediquei essa manhã para ler um livro que gosto muito, muita paz e ensino.",
        "hashtags": ["#livro", "#leitura", "#paz"],
        "createdAt": "2025-05-18T10:02:00Z",
        "likes": 349,
        "comments": 35
    },
    {
        "id": 3,
        "author": {
            "id": 1,
            "name": "Lucas Ferreira",
            "username": "@eu_lucas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1"
        },
        "content": "Adoro ler livros, meu hobie favorito.",
        "hashtags": ["#livros"],
        "createdAt": "2025-05-20T15:36:00Z",
        "likes": 46,
        "comments": 13
    },
    {
        "id": 4,
        "author": {
            "id": 1,
            "name": "Lucas Ferreira",
            "username": "@eu_lucas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1"
        },
        "content": "Estou doando livros, quem tiver interesse, pode me mandar uma mensagem.",
        "hashtags": ["#doacao", "#livros", "#solidariedade"],
        "createdAt": "2025-05-29T13:17:00Z",
        "likes": 316,
        "comments": 19
    },
    {
        "id": 5,
        "author": {
            "id": 1,
            "name": "Lucas Ferreira",
            "username": "@eu_lucas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/1"
        },
        "content": "Fui jogar xadrez com os amigos, satisfação em poder tê-los como meus irmãos @italo_santos, @marcos_benicio",
        "hashtags": ["#xadrez", "#chess", "#amigos"],
        "createdAt": "2025-05-16T08:30:00Z",
        "likes": 53,
        "comments": 5
    },
    {
        "id": 6,
        "author": {
            "id": 2,
            "name": "Jeferson Albuquerque",
            "username": "@eu_jef",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2"
        },
        "content": "Vou tocar uma senata no concerto hoje.",
        "hashtags": ["#senata", "#concerto", "#violino"],
        "createdAt": "2025-03-14T06:32:00Z",
        "likes": 56,
        "comments": 6
    },
    {
        "id": 7,
        "author": {
            "id": 2,
            "name": "Jeferson Albuquerque",
            "username": "@eu_jef",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2"
        },
        "content": "Pensando seriamente em trocar de violino.",
        "hashtags": ["#violinista"],
        "createdAt": "2025-03-19T07:36:00Z",
        "likes": 26,
        "comments": 2
    },
    {
        "id": 8,
        "author": {
            "id": 2,
            "name": "Jeferson Albuquerque",
            "username": "@eu_jef",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2"
        },
        "content": "Mais tarde vou para o concerto de novo",
        "hashtags": ["#violino", "#violinista"],
        "createdAt": "2025-03-27T12:15:00Z",
        "likes": 16,
        "comments": 0
    },
    {
        "id": 9,
        "author": {
            "id": 2,
            "name": "Jeferson Albuquerque",
            "username": "@eu_jef",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2"
        },
        "content": "Um dia, irei para Guatemala tocar violino por lá, meu sonho!",
        "hashtags": ["#viajem", "#violino", "#música"],
        "createdAt": "2025-04-11T16:34:00Z",
        "likes": 36,
        "comments": 6
    },
    {
        "id": 10,
        "author": {
            "id": 2,
            "name": "Jeferson Albuquerque",
            "username": "@eu_jef",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/2"
        },
        "content": "Não tem coisa melhor do que tocar violino em um final de tarde. A sensação de tocar experience olhando para o sol se pondo é inexplicável",
        "hashtags": ["#violino", "#música"],
        "createdAt": "2025-04-22T19:26:00Z",
        "likes": 31,
        "comments": 3
    },
    {
        "id": 11,
        "author": {
            "id": 3,
            "name": "Ravi Ramesh",
            "username": "@ravi_ramesh",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3"
        },
        "content": "रोज़मर्रा की ज़िंदगी की भागदौड़ के कारण आज मैं बहुत थक गया हूँ",
        "hashtags": [],
        "createdAt": "2025-02-13T06:31:00Z",
        "likes": 68,
        "comments": 4
    },
    {
        "id": 12,
        "author": {
            "id": 3,
            "name": "Ravi Ramesh",
            "username": "@ravi_ramesh",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3"
        },
        "content": "मैं यहाँ से जाना चाहता हूँ, मैं अब और बर्दाश्त नहीं कर सकता",
        "hashtags": [],
        "createdAt": "2025-02-15T07:16:00Z",
        "likes": 53,
        "comments": 6
    },
    {
        "id": 13,
        "author": {
            "id": 3,
            "name": "Ravi Ramesh",
            "username": "@ravi_ramesh",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3"
        },
        "content": "आज मैं ध्यान करने के लिए जल्दी उठा और मुझे अभी से लग रहा है कि दिन बहुत फलदायी होगा। शांत मन किसी भी उपलब्धि की पहली सीढ़ी है। 🧘‍♂️",
        "hashtags": [],
        "createdAt": "2025-02-17T09:24:00Z",
        "likes": 31,
        "comments": 2
    },
    {
        "id": 14,
        "author": {
            "id": 3,
            "name": "Ravi Ramesh",
            "username": "@ravi_ramesh",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3"
        },
        "content": "तकनीक हमें दुनिया से जोड़ती है, लेकिन हम खुद से जुड़ना नहीं भूल सकते। संतुलन ही सब कुछ है। 🌍✨",
        "hashtags": [],
        "createdAt": "2025-02-16T09:45:00Z",
        "likes": 71,
        "comments": 12
    },
    {
        "id": 15,
        "author": {
            "id": 3,
            "name": "Ravi Ramesh",
            "username": "@ravi_ramesh",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/3"
        },
        "content": "सूर्यास्त की सैर दिन का मेरा सबसे पसंदीदा समय है। यही वह समय होता है जब मैं अपने पास जो कुछ है उसके लिए आभारी होती हूँ और कल के लिए तैयारी करती हूँ। 🌅",
        "hashtags": [],
        "createdAt": "2025-02-17T18:20:00Z",
        "likes": 64,
        "comments": 8
    },
    {
        "id": 16,
        "author": {
            "id": 4,
            "name": "Jessica Pereira",
            "username": "@me_jess",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4"
        },
        "content": "Começando a semana com um café forte e uma lista de metas. Que seja produtiva e cheia de boas notícias! ☕✨",
        "hashtags": ["#segunda", "#foco", "#produtividade"],
        "createdAt": "2025-02-18T08:10:00Z",
        "likes": 87,
        "comments": 14
    },
    {
        "id": 17,
        "author": {
            "id": 4,
            "name": "Jessica Pereira",
            "username": "@me_jess",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4"
        },
        "content": "Não existe tempo perfeito, existe a coragem de começar. Hoje dei o primeiro passo em um novo projeto! 🚀",
        "hashtags": ["#motivação", "#novosdesafios", "#coragem"],
        "createdAt": "2025-02-19T10:22:00Z",
        "likes": 63,
        "comments": 19
    },
    {
        "id": 18,
        "author": {
            "id": 4,
            "name": "Jessica Pereira",
            "username": "@me_jess",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4"
        },
        "content": "Às vezes tudo que precisamos é de uma boa música e alguns minutos sozinha. 🎧💆‍♀️",
        "hashtags": ["#autocuidado", "#paz", "#momentomeu"],
        "createdAt": "2025-02-20T21:05:00Z",
        "likes": 74,
        "comments": 9
    },
    {
        "id": 19,
        "author": {
            "id": 4,
            "name": "Jessica Pereira",
            "username": "@me_jess",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4"
        },
        "content": "Hoje me desafiei na cozinha! Receita nova, muitos erros e risadas, mas no fim ficou delicioso. 🍝😅",
        "hashtags": ["#cozinha", "#aventuras", "#sabores"],
        "createdAt": "2025-02-21T19:40:00Z",
        "likes": 96,
        "comments": 22
    },
    {
        "id": 20,
        "author": {
            "id": 4,
            "name": "Jessica Pereira",
            "username": "@me_jess",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/4"
        },
        "content": "Domingo de sol, livro na mão e coração tranquilo. É assim que recarrego minhas energias. 📚☀️",
        "hashtags": ["#domingo", "#leitura", "#pazinterior"],
        "createdAt": "2025-02-23T15:00:00Z",
        "likes": 134,
        "comments": 27
    },
    {
        "id": 21,
        "author": {
            "id": 5,
            "name": "Juliana Lima",
            "username": "@ju_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5"
        },
        "content": "Nada como uma corrida leve pela manhã para começar o dia cheia de energia. 🏃‍♀️🌅",
        "hashtags": ["#corrida", "#saúde", "#energia"],
        "createdAt": "2025-02-24T06:30:00Z",
        "likes": 62,
        "comments": 15
    },
    {
        "id": 22,
        "author": {
            "id": 5,
            "name": "Juliana Lima",
            "username": "@ju_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5"
        },
        "content": "Trabalhando em um novo projeto criativo que está me deixando super animada! Logo compartilho novidades. ✨🎨",
        "hashtags": ["#criatividade", "#novoprojeto", "#inspiração"],
        "createdAt": "2025-02-25T11:50:00Z",
        "likes": 105,
        "comments": 18
    },
    {
        "id": 23,
        "author": {
            "id": 5,
            "name": "Juliana Lima",
            "username": "@ju_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5"
        },
        "content": "Não precisamos de muito para ser felizes: amigos verdadeiros, risadas sinceras e momentos simples. 💛",
        "hashtags": ["#amizade", "#felicidade", "#simplicidade"],
        "createdAt": "2025-02-26T20:15:00Z",
        "likes": 37,
        "comments": 3
    },
    {
        "id": 24,
        "author": {
            "id": 5,
            "name": "Juliana Lima",
            "username": "@ju_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5"
        },
        "content": "Sexta-feira chegou! Hora de relaxar, colocar uma boa série e esquecer da correria da semana. 🍿📺",
        "hashtags": ["#sexta", "#seriemaratonada", "#descanso"],
        "createdAt": "2025-02-28T21:00:00Z",
        "likes": 48,
        "comments": 9
    },
    {
        "id": 25,
        "author": {
            "id": 5,
            "name": "Juliana Lima",
            "username": "@ju_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/5"
        },
        "content": "Um café quentinho e um caderno em branco. Ideias fluem melhor assim. ☕📓",
        "hashtags": ["#café", "#inspiração", "#momentomeu"],
        "createdAt": "2025-03-01T09:10:00Z",
        "likes": 77,
        "comments": 11
    },
    {
        "id": 26,
        "author": {
            "id": 6,
            "name": "Stefany Lindsay",
            "username": "@stef_lindsay",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
        },
        "content": "Golden hour is always my favorite time to capture magic through the lens. 🌅📸",
        "hashtags": ["#photography", "#goldenhour", "#creative"],
        "createdAt": "2025-03-02T18:45:00Z",
        "likes": 154,
        "comments": 27
    },
    {
        "id": 27,
        "author": {
            "id": 6,
            "name": "Stefany Lindsay",
            "username": "@stef_lindsay",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
        },
        "content": "Design is not just what it looks like, it’s how it works. Constantly learning and improving my craft. ✨💻",
        "hashtags": ["#design", "#creativity", "#uxui"],
        "createdAt": "2025-03-03T14:20:00Z",
        "likes": 132,
        "comments": 21
    },
    {
        "id": 28,
        "author": {
            "id": 6,
            "name": "Stefany Lindsay",
            "username": "@stef_lindsay",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
        },
        "content": "Exploring downtown today with my camera. Every corner tells a different story. 🏙️📷",
        "hashtags": ["#urbanphotography", "#storytelling", "#downtown"],
        "createdAt": "2025-03-04T17:05:00Z",
        "likes": 118,
        "comments": 16
    },
    {
        "id": 29,
        "author": {
            "id": 6,
            "name": "Stefany Lindsay",
            "username": "@stef_lindsay",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
        },
        "content": "Sometimes the best inspiration comes from nature. Fresh air, colors, textures... pure art. 🍃🎨",
        "hashtags": ["#inspiration", "#nature", "#artistlife"],
        "createdAt": "2025-03-05T12:40:00Z",
        "likes": 167,
        "comments": 30
    },
    {
        "id": 30,
        "author": {
            "id": 6,
            "name": "Stefany Lindsay",
            "username": "@stef_lindsay",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/6"
        },
        "content": "Editing late at night with coffee by my side. Creativity doesn’t have a schedule. ☕✨",
        "hashtags": ["#designerlife", "#nightowl", "#creativity"],
        "createdAt": "2025-03-06T01:15:00Z",
        "likes": 143,
        "comments": 19
    },
    {
        "id": 31,
        "author": {
            "id": 7,
            "nam": "Thiago Silva",
            "username": "@coronel_thiagosilva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/7"
        },
        "content": "Disciplina não é apenas seguir regras, é escolher o caminho certo mesmo quando ninguém está olhando. ⚔️🇧🇷",
        "hashtags": ["#liderança", "#disciplina", "#honra"],
        "createdAt": "2025-03-07T06:00:00Z",
        "likes": 211,
        "comments": 42
    },
    {
        "id": 32,
        "author": {
            "id": 7,
            "name": "Thiago Silva",
            "username": "@coronel_thiagosilva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/7"
        },
        "content": "Orgulho de ver minha tropa unida, pronta para qualquer missão. A força de um soldado vem da confiança no seu líder. 💂‍♂️",
        "hashtags": ["#exército", "#orgulho", "#missão"],
        "createdAt": "2025-03-08T08:30:00Z",
        "likes": 185,
        "comments": 29
    },
    {
        "id": 33,
        "author": {
            "id": 7,
            "name": "Thiago Silva",
            "username": "@coronel_thiagosilva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/7"
        },
        "content": "Na vida militar aprendemos que cada detalhe importa. Treinar duro é o que garante a vitória no momento certo. 🎖️",
        "hashtags": ["#treino", "#força", "#estratégia"],
        "createdAt": "2025-03-09T05:45:00Z",
        "likes": 167,
        "comments": 24
    },
    {
        "id": 34,
        "author": {
            "id": 7,
            "name": "Thiago Silva",
            "username": "@coronel_thiagosilva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/7"
        },
        "content": "A farda representa mais que um uniforme: representa sacrifício, lealdade e amor pela pátria. 🇧🇷",
        "hashtags": ["#patriotismo", "#honra", "#forçanacional"],
        "createdAt": "2025-03-10T10:10:00Z",
        "likes": 248,
        "comments": 53
    },
    {
        "id": 35,
        "author": {
            "id": 7,
            "name": "Thiago Silva",
            "username": "@coronel_thiagosilva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/7"
        },
        "content": "Por trás do título de coronel, existe um homem comum que valoriza a família, os amigos e cada momento de paz. 🕊️",
        "hashtags": ["#família", "#vida", "#equilíbrio"],
        "createdAt": "2025-03-11T20:20:00Z",
        "likes": 193,
        "comments": 37
    },
    {
        "id": 36,
        "author": {
            "id": 8,
            "name": "Agatha Guilmesh",
            "username": "@aghata",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
        },
        "content": "Just finished recording my new single! Can’t wait for you all to hear it. 🎶✨",
        "hashtags": ["#newsingle", "#musiclife", "#studio"],
        "createdAt": "2025-03-12T15:30:00Z",
        "likes": 10245,
        "comments": 532
    },
    {
        "id": 37,
        "author": {
            "id": 8,
            "name": "Agatha Guilmesh",
            "username": "@aghata",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
        },
        "content": "Touring across Canada this summer! Any cities you’re hoping I come to? 🍁🎤",
        "hashtags": ["#tour", "#Canad", "#live"],
        "createdAt": "2025-03-13T11:00:00Z",
        "likes": 9823,
        "comments": 498
    },
    {
        "id": 38,
        "author": {
            "id": 8,
            "name": "Agatha Guilmesh",
            "username": "@aghata",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
        },
        "content": "Nothing beats the feeling of performing live and seeing all your amazing fans singing along. ❤️🎵",
        "hashtags": ["#concert", "#fans", "#grateful"],
        "createdAt": "2025-03-14T20:15:00Z",
        "likes": 11560,
        "comments": 623
    },
    {
        "id": 39,
        "author": {
            "id": 8,
            "name": "Agatha Guilmesh",
            "username": "@aghata",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
        },
        "content": "Studio nights and coffee—my two essentials for creating new music. ☕🎹",
        "hashtags": ["#musicstudio", "#creativity", "#nightwork"],
        "createdAt": "2025-03-15T02:45:00Z",
        "likes": 8740,
        "comments": 412
    },
    {
        "id": 40,
        "author": {
            "id": 8,
            "name": "Agatha Guilmesh",
            "username": "@aghata",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/8"
        },
        "content": "Can’t wait to share my upcoming music video with you all! 🎬✨ Stay tuned!",
        "hashtags": ["#musicvideo", "#comingsoon", "#excited"],
        "createdAt": "2025-03-16T16:10:00Z",
        "likes": 12980,
        "comments": 708
    },
    {
        "id": 41,
        "author": {
            "id": 9,
            "name": "Alessandra Melchior",
            "username": "@melchior_ale",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9"
        },
        "content": "Caminhadas matinais são a melhor forma de começar o dia com a mente clara e energia renovada. 🌿☀️",
        "hashtags": ["#caminhada", "#mindfulness", "#vidasaudável"],
        "createdAt": "2025-03-17T07:30:00Z",
        "likes": 145,
        "comments": 22
    },
    {
        "id": 42,
        "author": {
            "id": 9,
            "name": "Alessandra Melchior",
            "username": "@melchior_ale",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9"
        },
        "content": "Um chá, um bom livro e uma tarde chuvosa. Combinação perfeita. 🍵📖",
        "hashtags": ["#aconchego", "#relax", "#leituratime"],
        "createdAt": "2025-03-18T15:45:00Z",
        "likes": 132,
        "comments": 19
    },
    {
        "id": 43,
        "author": {
            "id": 9,
            "name": "Alessandra Melchior",
            "username": "@melchior_ale",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9"
        },
        "content": "Experimentando novas receitas na cozinha hoje. Cozinhar é uma terapia. 👩‍🍳✨",
        "hashtags": ["#cozinha", "#hobby", "#criatividade"],
        "createdAt": "2025-03-19T12:20:00Z",
        "likes": 158,
        "comments": 27
    },
    {
        "id": 44,
        "author": {
            "id": 9,
            "name": "Alessandra Melchior",
            "username": "@melchior_ale",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9"
        },
        "content": "Corridas no fim da tarde ajudam a aliviar o estresse e clarear a mente. Super recomendo! 🏃‍♀️🌆",
        "hashtags": ["#fitness", "#corrida", "#bemestar"],
        "createdAt": "2025-03-20T18:10:00Z",
        "likes": 121,
        "comments": 16
    },
    {
        "id": 45,
        "author": {
            "id": 9,
            "name": "Alessandra Melchior",
            "username": "@melchior_ale",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/9"
        },
        "content": "Passar tempo de qualidade com a família não tem preço. Valorize cada momento. ❤️👨‍👩‍👧‍👦",
        "hashtags": ["#família", "#amor", "#gratidão"],
        "createdAt": "2025-03-21T14:30:00Z",
        "likes": 178,
        "comments": 33
    },
    {
        "id": 46,
        "author": {
            "id": 10,
            "name": "Emily Garcia",
            "username": "@emily_garcia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10"
        },
        "content": "Acordei inspirada hoje e decidi organizar meu espaço de trabalho. Ambiente limpo, mente limpa! 🖋️✨",
        "hashtags": ["#organização", "#produtividade", "#inspiração"],
        "createdAt": "2025-03-22T08:00:00Z",
        "likes": 98,
        "comments": 14
    },
    {
        "id": 47,
        "author": {
            "id": 10,
            "name": "Emily Garcia",
            "username": "@emily_garcia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10"
        },
        "content": "Hoje foi dia de experimentar uma receita vegana nova. Surpreendentemente deliciosa! 🌱🍴",
        "hashtags": ["#culinária", "#vegano", "#experimentar"],
        "createdAt": "2025-03-23T13:25:00Z",
        "likes": 112,
        "comments": 19
    },
    {
        "id": 48,
        "author": {
            "id": 10,
            "name": "Emily Garcia",
            "username": "@emily_garcia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10"
        },
        "content": "Fim de tarde perfeito para fotografar o pôr do sol. Luz dourada é sempre mágica. 🌇📷",
        "hashtags": ["#fotografia", "#pordosol", "#natureza"],
        "createdAt": "2025-03-24T18:45:00Z",
        "likes": 134,
        "comments": 23
    },
    {
        "id": 49,
        "author": {
            "id": 10,
            "name": "Emily Garcia",
            "username": "@emily_garcia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10"
        },
        "content": "Dedicar alguns minutos à meditação mudou completamente minha energia do dia. Recomendo! 🧘‍♀️💫",
        "hashtags": ["#meditação", "#bemestar", "#energia"],
        "createdAt": "2025-03-25T07:10:00Z",
        "likes": 121,
        "comments": 17
    },
    {
        "id": 50,
        "author": {
            "id": 10,
            "name": "Emily Garcia",
            "username": "@emily_garcia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/10"
        },
        "content": "Nada como ouvir música boa e se perder nas memórias que ela traz. 🎶❤️",
        "hashtags": ["#música", "#nostalgia", "#momentos"],
        "createdAt": "2025-03-26T21:00:00Z",
        "likes": 145,
        "comments": 25
    },
    {
        "id": 51,
        "author": {
            "id": 11,
            "name": "Nataly Lima",
            "username": "@eu_nataly_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
        },
        "content": "Hoje foi dia de ensaio longo. Cada nota precisa de dedicação e paixão. 🎻✨",
        "hashtags": ["#violinista", "#ensaios", "#musica"],
        "createdAt": "2025-03-27T10:15:00Z",
        "likes": 178,
        "comments": 21
    },
    {
        "id": 52,
        "author": {
            "id": 11,
            "name": "Nataly Lima",
            "username": "@eu_nataly_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
        },
        "content": "A energia do palco é indescritível! Amo sentir a música vibrar junto com o público. 🎶❤️",
        "hashtags": ["#show", "#violin", "#paixão"],
        "createdAt": "2025-03-28T20:00:00Z",
        "likes": 213,
        "comments": 34
    },
    {
        "id": 53,
        "author": {
            "id": 11,
            "name": "Nataly Lima",
            "username": "@eu_nataly_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
        },
        "content": "Praticar diariamente faz toda a diferença. Persistência é a chave para a maestria. 🗝️🎻",
        "hashtags": ["#prática", "#disciplina", "#musica"],
        "createdAt": "2025-03-29T08:30:00Z",
        "likes": 165,
        "comments": 19
    },
    {
        "id": 54,
        "author": {
            "id": 11,
            "name": "Nataly Lima",
            "username": "@eu_nataly_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
        },
        "content": "Momentos de inspiração aparecem nos lugares mais inesperados. Hoje, no parque, veio uma melodia linda. 🍃🎵",
        "hashtags": ["#inspiração", "#violinista", "#natureza"],
        "createdAt": "2025-03-30T16:20:00Z",
        "likes": 142,
        "comments": 16
    },
    {
        "id": 55,
        "author": {
            "id": 11,
            "name": "Nataly Lima",
            "username": "@eu_nataly_lima",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
        },
        "content": "Nada se compara ao sentimento de compor uma nova música e ouvir cada nota ganhar vida. ✨🎻",
        "hashtags": ["#composição", "#música", "#emoção"],
        "createdAt": "2025-03-31T19:45:00Z",
        "likes": 191,
        "comments": 28
    },
    {
        "id": 56,
        "author": {
            "id": 12,
            "name": "Giulia Bianchi",
            "username": "@giulia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12"
        },
        "content": "Every smile from my little one brightens my entire day. 💖👶",
        "hashtags": ["#motherhood", "#love", "#family"],
        "createdAt": "2025-04-01T09:30:00Z",
        "likes": 21500,
        "comments": 1820
    },
    {
        "id": 57,
        "author": {
            "id": 12,
            "name": "Giulia Bianchi",
            "username": "@giulia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12"
        },
        "content": "Morning cuddles with my baby are the best therapy. 🌸✨",
        "hashtags": ["#momlife", "#babycuddles", "#happiness"],
        "createdAt": "2025-04-02T08:15:00Z",
        "likes": 19870,
        "comments": 1590
    },
    {
        "id": 58,
        "author": {
            "id": 12,
            "name": "Giulia Bianchi",
            "username": "@giulia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12"
        },
        "content": "First steps today! Feeling so proud and emotional. 👣💞",
        "hashtags": ["#firststeps", "#proudmom", "#familymoments"],
        "createdAt": "2025-04-03T17:45:00Z",
        "likes": 23410,
        "comments": 2035
    },
    {
        "id": 59,
        "author": {
            "id": 12,
            "name": "Giulia Bianchi",
            "username": "@giulia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12"
        },
        "content": "Bedtime stories with my little princess are my favorite part of the day. 📖🌙",
        "hashtags": ["#bedtimestory", "#motherhood", "#magicalmoments"],
        "createdAt": "2025-04-04T20:00:00Z",
        "likes": 18950,
        "comments": 1440
    },
    {
        "id": 60,
        "author": {
            "id": 12,
            "name": "Giulia Bianchi",
            "username": "@giulia",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/12"
        },
        "content": "Watching her laugh uncontrollably makes every challenge disappear. ❤️😂",
        "hashtags": ["#laughter", "#joy", "#familyfirst"],
        "createdAt": "2025-04-05T15:10:00Z",
        "likes": 22100,
        "comments": 1980
    },
    {
        "id": 61,
        "author": {
            "id": 13,
            "name": "Larissa Melo",
            "username": "@lari_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13"
        },
        "content": "Nada como um ter um bom descanço e poder acordar pronta para um novo dia.",
        "hashtags": ["#leitura", "#relax", "#momentosimples"],
        "createdAt": "2025-04-06T16:00:00Z",
        "likes": 65,
        "comments": 8
    },
    {
        "id": 62,
        "author": {
            "id": 13,
            "name": "Larissa Melo",
            "username": "@lari_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13"
        },
        "content": "Hoje decidi caminhar no parque e aproveitar o sol da manhã. ☀️🌳",
        "hashtags": ["#caminhada", "#natureza", "#bemestar"],
        "createdAt": "2025-04-07T08:30:00Z",
        "likes": 72,
        "comments": 11
    },
    {
        "id": 63,
        "author": {
            "id": 13,
            "name": "Larissa Melo",
            "username": "@lari_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13"
        },
        "content": "Tarde de filmes e pipoca em casa. Pequenas alegrias fazem toda a diferença. 🎬🍿",
        "hashtags": ["#filmes", "#aconchego", "#diversão"],
        "createdAt": "2025-04-08T18:15:00Z",
        "likes": 58,
        "comments": 6
    },
    {
        "id": 64,
        "author": {
            "id": 13,
            "name": "Larissa Melo",
            "username": "@lari_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13"
        },
        "content": "Experimentando uma nova receita hoje! Amo cozinhar e inventar sabores. 👩‍🍳✨",
        "hashtags": ["#cozinha", "#hobby", "#experimentar"],
        "createdAt": "2025-04-09T12:00:00Z",
        "likes": 81,
        "comments": 13
    },
    {
        "id": 65,
        "author": {
            "id": 13,
            "name": "Larissa Melo",
            "username": "@lari_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/13"
        },
        "content": "Final de semana chegou! Hora de relaxar, ouvir música e aproveitar cada momento. 🎶💛",
        "hashtags": ["#finaldesemana", "#relax", "#momentosfelizes"],
        "createdAt": "2025-04-10T09:20:00Z",
        "likes": 90,
        "comments": 15
    },
    {
        "id": 66,
        "author": {
            "id": 14,
            "name": "Sharow Mustang",
            "username": "@sharow_mustang",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14"
        },
        "content": "Nothing beats a morning run by the lake. Fresh air, clear mind. 🌅🏃‍♀️",
        "hashtags": ["#morningrun", "#freshair", "#healthylifestyle"],
        "createdAt": "2025-04-11T07:15:00Z",
        "likes": 320,
        "comments": 42
    },
    {
        "id": 67,
        "author": {
            "id": 14,
            "name": "Sharow Mustang",
            "username": "@sharow_mustang",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14"
        },
        "content": "Trying out a new coffee shop today. The latte art is amazing! ☕🎨",
        "hashtags": ["#coffeetime", "#latteart", "#newplaces"],
        "createdAt": "2025-04-12T10:30:00Z",
        "likes": 287,
        "comments": 36
    },
    {
        "id": 68,
        "author": {
            "id": 14,
            "name": "Sharow Mustang",
            "username": "@sharow_mustang",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14"
        },
        "content": "Weekend vibes: cozy blankets, a good movie, and some homemade snacks. 🎬🍿",
        "hashtags": ["#weekendvibes", "#cozy", "#relax"],
        "createdAt": "2025-04-13T16:45:00Z",
        "likes": 312,
        "comments": 41
    },
    {
        "id": 69,
        "author": {
            "id": 14,
            "name": "Sharow Mustang",
            "username": "@sharow_mustang",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14"
        },
        "content": "Exploring downtown today. The street art here is incredible! 🎨🏙️",
        "hashtags": ["#urbanexploration", "#streetart", "#citylife"],
        "createdAt": "2025-04-14T14:20:00Z",
        "likes": 298,
        "comments": 37
    },
    {
        "id": 70,
        "author": {
            "id": 14,
            "name": "Sharow Mustang",
            "username": "@sharow_mustang",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/14"
        },
        "content": "Late night journaling. Reflecting on the little wins and lessons of the day. 🖊️✨",
        "hashtags": ["#journaling", "#reflection", "#selfgrowth"],
        "createdAt": "2025-04-15T22:10:00Z",
        "likes": 275,
        "comments": 33
    },
    {
        "id": 71,
        "author": {
            "id": 15,
            "name": "Hanna Lange",
            "username": "@ich_hanna",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15"
        },
        "content": "Morgenspaziergang im Park – frische Luft und klare Gedanken. 🌿☀️",
        "hashtags": ["#Morgenspaziergang", "#Natur", "#Entspannung"],
        "createdAt": "2025-04-16T07:30:00Z",
        "likes": 210,
        "comments": 25
    },
    {
        "id": 72,
        "author": {
            "id": 15,
            "name": "Hanna Lange",
            "username": "@ich_hanna",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15"
        },
        "content": "Heute neue Rezepte ausprobiert – Kochen macht so viel Freude! 👩‍🍳✨",
        "hashtags": ["#Kochen", "#Hobby", "#Genuss"],
        "createdAt": "2025-04-17T12:45:00Z",
        "likes": 180,
        "comments": 20
    },
    {
        "id": 73,
        "author": {
            "id": 15,
            "name": "Hanna Lange",
            "username": "@ich_hanna",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15"
        },
        "content": "Abendkaffee auf dem Balkon und die Sonne genießen. ☕🌇",
        "hashtags": ["#Kaffeepause", "#Balkon", "#Abendstimmung"],
        "createdAt": "2025-04-18T18:10:00Z",
        "likes": 195,
        "comments": 22
    },
    {
        "id": 74,
        "author": {
            "id": 15,
            "name": "Hanna Lange",
            "username": "@ich_hanna",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15"
        },
        "content": "Bücherzeit! Nichts ist schöner, als in eine andere Welt abzutauchen. 📖✨",
        "hashtags": ["#Lesen", "#Bücher", "#Entspannung"],
        "createdAt": "2025-04-19T15:30:00Z",
        "likes": 205,
        "comments": 27
    },
    {
        "id": 75,
        "author": {
            "id": 15,
            "name": "Hanna Lange",
            "username": "@ich_hanna",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/15"
        },
        "content": "Spaziergänge am Wochenende helfen, den Kopf frei zu bekommen. 🏞️💛",
        "hashtags": ["#Wochenende", "#Natur", "#Achtsamkeit"],
        "createdAt": "2025-04-20T09:20:00Z",
        "likes": 220,
        "comments": 30
    },
    {
        "id": 76,
        "author": {
            "id": 16,
            "name": "Alex Couth",
            "username": "@me_alex_couth",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/16"
        },
        "content": "Just finished a crazy rehearsal session with Jess Music. Feeling pumped! 🎸🔥",
        "hashtags": ["#bandlife", "#guitar", "#rehearsal"],
        "createdAt": "2025-04-21T17:00:00Z",
        "likes": 420,
        "comments": 58
    },
    {
        "id": 77,
        "author": {
            "id": 16,
            "name": "Alex Couth",
            "username": "@me_alex_couth",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/16"
        },
        "content": "Late night guitar solo practice. Can’t get this riff out of my head! 🎶✨",
        "hashtags": ["#guitarsolo", "#practice", "#musiclover"],
        "createdAt": "2025-04-22T23:15:00Z",
        "likes": 385,
        "comments": 47
    },
    {
        "id": 78,
        "author": {
            "id": 16,
            "name": "Alex Couth",
            "username": "@me_alex_couth",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/16"
        },
        "content": "Touring with Jess Music is the best feeling ever. Fans, you rock! 🤘🎤",
        "hashtags": ["#tourlife", "#livemusic", "#fans"],
        "createdAt": "2025-04-23T20:40:00Z",
        "likes": 510,
        "comments": 72
    },
    {
        "id": 79,
        "author": {
            "id": 16,
            "name": "Alex Couth",
            "username": "@me_alex_couth",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/16"
        },
        "content": "Writing new songs in the studio. Creativity is flowing tonight. 🎹🎸",
        "hashtags": ["#songwriting", "#studio", "#musicianlife"],
        "createdAt": "2025-04-24T21:30:00Z",
        "likes": 435,
        "comments": 63
    },
    {
        "id": 80,
        "author": {
            "id": 16,
            "name": "Alex Couth",
            "username": "@me_alex_couth",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/16"
        },
        "content": "Nothing better than connecting with the audience during a live performance. ❤️🎶",
        "hashtags": ["#liveperformance", "#guitarist", "#musiclove"],
        "createdAt": "2025-04-25T19:10:00Z",
        "likes": 490,
        "comments": 68
    },
    {
        "id": 81,
        "author": {
            "id": 17,
            "name": "Otávio Alencar",
            "username": "@otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17"
        },
        "content": "O segredo de um bom negócio está na dedicação diária e na atenção aos detalhes. 💼✨",
        "hashtags": ["#empreendedorismo", "#CEO", "#negócios"],
        "createdAt": "2025-04-26T09:00:00Z",
        "likes": 12400,
        "comments": 850
    },
    {
        "id": 82,
        "author": {
            "id": 17,
            "name": "Otávio Alencar",
            "username": "@otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17"
        },
        "content": "Participar de debates jurídicos e eventos empresariais é essencial para crescer profissionalmente. ⚖️📈",
        "hashtags": ["#advogado", "#networking", "#carreira"],
        "createdAt": "2025-04-27T15:20:00Z",
        "likes": 11050,
        "comments": 720
    },
    {
        "id": 83,
        "author": {
            "id": 17,
            "name": "Otávio Alencar",
            "username": "@otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17"
        },
        "content": "Delegar tarefas é fundamental para liderar uma equipe de forma eficiente. 👥💡",
        "hashtags": ["#liderança", "#gestão", "#CEO"],
        "createdAt": "2025-04-28T11:10:00Z",
        "likes": 9800,
        "comments": 610
    },
    {
        "id": 84,
        "author": {
            "id": 17,
            "name": "Otávio Alencar",
            "username": "@otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17"
        },
        "content": "Nada se compara à sensação de fechar um contrato importante e ver o resultado do esforço da equipe. 🤝🏆",
        "hashtags": ["#sucesso", "#negócios", "#empreendedorismo"],
        "createdAt": "2025-04-29T17:45:00Z",
        "likes": 13750,
        "comments": 890
    },
    {
        "id": 85,
        "author": {
            "id": 17,
            "name": "Otávio Alencar",
            "username": "@otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/17"
        },
        "content": "Equilibrar trabalho e momentos pessoais é a chave para uma vida plena e produtiva. ⚖️💛",
        "hashtags": ["#equilíbrio", "#vida", "#produtividade"],
        "createdAt": "2025-04-30T20:10:00Z",
        "likes": 12300,
        "comments": 760
    },
    {
        "id": 86,
        "author": {
            "id": 18,
            "name": "Camille Lemaire",
            "username": "@lemaire_camille",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18"
        },
        "content": "Spent the afternoon in the lab running experiments. Every little discovery counts! 🔬✨",
        "hashtags": ["#biomedicine", "#labwork", "#research"],
        "createdAt": "2025-05-01T14:00:00Z",
        "likes": 85,
        "comments": 9
    },
    {
        "id": 87,
        "author": {
            "id": 18,
            "name": "Camille Lemaire",
            "username": "@lemaire_camille",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18"
        },
        "content": "Reading some interesting papers on cell regeneration today. Science never ceases to amaze me. 📚🔬",
        "hashtags": ["#studies", "#biomedicine", "#learning"],
        "createdAt": "2025-05-02T10:30:00Z",
        "likes": 92,
        "comments": 12
    },
    {
        "id": 88,
        "author": {
            "id": 18,
            "name": "Camille Lemaire",
            "username": "@lemaire_camille",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18"
        },
        "content": "Coffee and notes – the perfect combination for a productive study session. ☕📝",
        "hashtags": ["#studytime", "#coffee", "#biomedstudent"],
        "createdAt": "2025-05-03T09:15:00Z",
        "likes": 78,
        "comments": 7
    },
    {
        "id": 89,
        "author": {
            "id": 18,
            "name": "Camille Lemaire",
            "username": "@lemaire_camille",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18"
        },
        "content": "Attended a seminar on gene therapy today. The future of medicine is fascinating! 🧬💡",
        "hashtags": ["#seminar", "#genetherapy", "#innovation"],
        "createdAt": "2025-05-04T16:40:00Z",
        "likes": 88,
        "comments": 11
    },
    {
        "id": 90,
        "author": {
            "id": 18,
            "name": "Camille Lemaire",
            "username": "@lemaire_camille",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/18"
        },
        "content": "Evening walk to clear my mind after a long day in the lab. Nature always helps. 🌳🌅",
        "hashtags": ["#eveningwalk", "#relax", "#nature"],
        "createdAt": "2025-05-05T19:00:00Z",
        "likes": 80,
        "comments": 10
    },
    {
        "id": 91,
        "author": {
            "id": 19,
            "name": "Amanda Collins",
            "username": "@amanda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19"
        },
        "content": "Behind the scenes before tonight’s broadcast. Excited to share the latest updates with everyone! 🎥📰",
        "hashtags": ["#newsanchor", "#broadcast", "#journalism"],
        "createdAt": "2025-05-06T18:00:00Z",
        "likes": 62200,
        "comments": 4100
    },
    {
        "id": 92,
        "author": {
            "id": 19,
            "name": "Amanda Collins",
            "username": "@amanda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19"
        },
        "content": "Interviewing local heroes today. Their stories inspire me every time. 🌟🎤",
        "hashtags": ["#journalism", "#interview", "#inspiration"],
        "createdAt": "2025-05-07T14:30:00Z",
        "likes": 58800,
        "comments": 3900
    },
    {
        "id": 93,
        "author": {
            "id": 19,
            "name": "Amanda Collins",
            "username": "@amanda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19"
        },
        "content": "Newsroom mornings are busy, but the teamwork makes it all worthwhile. 📰💪",
        "hashtags": ["#teamwork", "#newsroom", "#journalismlife"],
        "createdAt": "2025-05-08T09:20:00Z",
        "likes": 61000,
        "comments": 4020
    },
    {
        "id": 94,
        "author": {
            "id": 19,
            "name": "Amanda Collins",
            "username": "@amanda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19"
        },
        "content": "Covering stories that matter is my passion. Every voice deserves to be heard. 🗣️❤️",
        "hashtags": ["#news", "#passion", "#journalist"],
        "createdAt": "2025-05-09T16:45:00Z",
        "likes": 53400,
        "comments": 4250
    },
    {
        "id": 95,
        "author": {
            "id": 19,
            "name": "Amanda Collins",
            "username": "@amanda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/19"
        },
        "content": "Wrapping up a live segment today. Grateful for the opportunity to inform and connect with viewers. 🎬✨",
        "hashtags": ["#livebroadcast", "#newsanchor", "#gratitude"],
        "createdAt": "2025-05-10T20:10:00Z",
        "likes": 60500,
        "comments": 3980
    },
    {
        "id": 96,
        "author": {
            "id": 20,
            "name": "Leticia Monez",
            "username": "@le_monez",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20"
        },
        "content": "Amo começar o dia com uma caminhada tranquila e ouvir música para animar a manhã. 🎧☀️",
        "hashtags": ["#manhã", "#caminhada", "#musica"],
        "createdAt": "2025-05-11T07:15:00Z",
        "likes": 42,
        "comments": 5
    },
    {
        "id": 97,
        "author": {
            "id": 20,
            "name": "Leticia Monez",
            "username": "@le_monez",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20"
        },
        "content": "Tarde de café com amigas. Momentos simples que valem muito! ☕💛",
        "hashtags": ["#amizade", "#cafedatarde", "#momentos"],
        "createdAt": "2025-05-12T15:30:00Z",
        "likes": 38,
        "comments": 4
    },
    {
        "id": 98,
        "author": {
            "id": 20,
            "name": "Leticia Monez",
            "username": "@le_monez",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20"
        },
        "content": "Explorando a cidade e descobrindo cantinhos novos. 🏙️✨",
        "hashtags": ["#exploração", "#cidade", "#aventura"],
        "createdAt": "2025-05-13T10:20:00Z",
        "likes": 45,
        "comments": 6
    },
    {
        "id": 99,
        "author": {
            "id": 20,
            "name": "Leticia Monez",
            "username": "@le_monez",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20"
        },
        "content": "Finalizando um livro incrível hoje! Nada melhor que se perder em uma boa história. 📖❤️",
        "hashtags": ["#leitura", "#livros", "#paixão"],
        "createdAt": "2025-05-14T18:00:00Z",
        "likes": 50,
        "comments": 7
    },
    {
        "id": 100,
        "author": {
            "id": 20,
            "name": "Leticia Monez",
            "username": "@le_monez",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/20"
        },
        "content": "Fim de semana chegou! Hora de relaxar, ouvir música e aproveitar cada momento. 🎶🌸",
        "hashtags": ["#fimdesemana", "#relax", "#momentosfelizes"],
        "createdAt": "2025-05-15T09:45:00Z",
        "likes": 55,
        "comments": 8
    },
    {
        "id": 101,
        "author": {
            "id": 21,
            "name": "Maria Neiva",
            "username": "@maria20",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21"
        },
        "content": "Hoje foi dia de cozinhar uma receita nova. Amo experimentar sabores diferentes! 👩‍🍳✨",
        "hashtags": ["#cozinha", "#novareceita", "#hobby"],
        "createdAt": "2025-05-16T12:00:00Z",
        "likes": 47,
        "comments": 6
    },
    {
        "id": 102,
        "author": {
            "id": 21,
            "name": "Maria Neiva",
            "username": "@maria20",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21"
        },
        "content": "Uma boa caminhada ao ar livre faz maravilhas para a mente e o corpo. 🌳☀️",
        "hashtags": ["#caminhada", "#natureza", "#bemestar"],
        "createdAt": "2025-05-17T08:30:00Z",
        "likes": 52,
        "comments": 7
    },
    {
        "id": 103,
        "author": {
            "id": 21,
            "name": "Maria Neiva",
            "username": "@maria20",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21"
        },
        "content": "Fim de tarde perfeito para ler um bom livro e tomar chá. 🍵📖",
        "hashtags": ["#leitura", "#relax", "#momentosimples"],
        "createdAt": "2025-05-18T17:45:00Z",
        "likes": 49,
        "comments": 5
    },
    {
        "id": 104,
        "author": {
            "id": 21,
            "name": "Maria Neiva",
            "username": "@maria20",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21"
        },
        "content": "Assistindo a filmes clássicos hoje. Nada como boas histórias para relaxar. 🎬✨",
        "hashtags": ["#filmes", "#clássicos", "#diversão"],
        "createdAt": "2025-05-19T20:10:00Z",
        "likes": 55,
        "comments": 8
    },
    {
        "id": 105,
        "author": {
            "id": 21,
            "name": "Maria Neiva",
            "username": "@maria20",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/21"
        },
        "content": "Sábado à noite tranquilo, música suave e boas energias. 🎶💛",
        "hashtags": ["#fimdesemana", "#relax", "#boaenergia"],
        "createdAt": "2025-05-20T21:00:00Z",
        "likes": 60,
        "comments": 9
    },
    {
        "id": 106,
        "author": {
            "id": 22,
            "name": "Виктор Карпов",
            "username": "@Я_Виктор",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/22"
        },
        "content": "Утро началось с крепкого кофе и долгой прогулки. Отличный старт дня. ☕🚶‍♂️",
        "hashtags": ["#утро", "#кофе", "#прогулка"],
        "createdAt": "2025-05-21T07:45:00Z",
        "likes": 42,
        "comments": 6
    },
    {
        "id": 107,
        "author": {
            "id": 22,
            "name": "Виктор Карпов",
            "username": "@Я_Виктор",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/22"
        },
        "content": "Слушаю старые рок-записи, вдохновение приходит само собой. 🎸🔥",
        "hashtags": ["#музыка", "#рок", "#вдохновение"],
        "createdAt": "2025-05-22T19:30:00Z",
        "likes": 167,
        "comments": 24
    },
    {
        "id": 108,
        "author": {
            "id": 22,
            "name": "Виктор Карпов",
            "username": "@Я_Виктор",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/22"
        },
        "content": "Сегодняшний вечер идеально подходит для чтения любимой книги. 📚✨",
        "hashtags": ["#вечер", "#книги", "#спокойствие"],
        "createdAt": "2025-05-23T21:15:00Z",
        "likes": 39,
        "comments": 4
    },
    {
        "id": 109,
        "author": {
            "id": 22,
            "name": "Виктор Карпов",
            "username": "@Я_Виктор",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/22"
        },
        "content": "Погода меняется каждый час, но в этом есть своя красота. 🌦️🌈",
        "hashtags": ["#погода", "#природа", "#жизнь"],
        "createdAt": "2025-05-24T15:20:00Z",
        "likes": 51,
        "comments": 8
    },
    {
        "id": 110,
        "author": {
            "id": 22,
            "name": "Виктор Карпов",
            "username": "@Я_Виктор",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/22"
        },
        "content": "Иногда нужно просто остановиться и послушать тишину. 🌌",
        "hashtags": ["#тишина", "#мысли", "#баланс"],
        "createdAt": "2025-05-25T23:00:00Z",
        "likes": 74,
        "comments": 13
    },
    {
        "id": 111,
        "author": {
            "id": 23,
            "name": "Caroline Smith",
            "username": "@caroline_smith7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23"
        },
        "content": "Aula de microbiologia prática hoje e eu simplesmente AMEI! 🔬✨",
        "hashtags": ["#biomedicina", "#microbiologia", "#novadescoberta"],
        "createdAt": "2025-05-21T14:10:00Z",
        "likes": 82,
        "comments": 14
    },
    {
        "id": 112,
        "author": {
            "id": 23,
            "name": "Caroline Smith",
            "username": "@caroline_smith7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23"
        },
        "content": "Café e livros de anatomia: a dupla perfeita para uma tarde de estudos. ☕📚",
        "hashtags": ["#rotinadeestudos", "#biomed", "#anatomia"],
        "createdAt": "2025-05-22T16:45:00Z",
        "likes": 54,
        "comments": 7
    },
    {
        "id": 113,
        "author": {
            "id": 23,
            "name": "Caroline Smith",
            "username": "@caroline_smith7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23"
        },
        "content": "Nada como ver no microscópio aquilo que só via nos livros. Fascinante demais! 🔍❤️",
        "hashtags": ["#microscopia", "#ciência", "#biomedicina"],
        "createdAt": "2025-05-23T11:30:00Z",
        "likes": 96,
        "comments": 18
    },
    {
        "id": 114,
        "author": {
            "id": 23,
            "name": "Caroline Smith",
            "username": "@caroline_smith7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23"
        },
        "content": "Estudar até tarde não é fácil, mas o sonho de se tornar biomédica vale cada página lida. ✨📖",
        "hashtags": ["#dedicação", "#sonhos", "#biomed"],
        "createdAt": "2025-05-23T23:50:00Z",
        "likes": 71,
        "comments": 12
    },
    {
        "id": 115,
        "author": {
            "id": 23,
            "name": "Caroline Smith",
            "username": "@caroline_smith7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/23"
        },
        "content": "Pequenos passos todos os dias levam a grandes conquistas no futuro. 🌟",
        "hashtags": ["#motivação", "#futuro", "#biomedicina"],
        "createdAt": "2025-05-24T08:20:00Z",
        "likes": 64,
        "comments": 10
    },
    {
        "id": 116,
        "author": {
            "id": 24,
            "name": "Jeferson Guimarães",
            "username": "@vc_jeferson",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/24"
        },
        "content": "Ontem no show em SP… que energia INCRÍVEL! 🔥🎤 Obrigado a cada um que cantou junto com a gente. Vocês fazem tudo valer a pena. ❤️",
        "hashtags": ["#Melo", "#show", "#gratidão"],
        "createdAt": "2025-05-24T23:30:00Z",
        "likes": 1250,
        "comments": 180
    },
    {
        "id": 117,
        "author": {
            "id": 24,
            "name": "Jeferson Guimarães",
            "username": "@vc_jeferson",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/24"
        },
        "content": "Voltando ao estúdio para gravar umas faixas novas… quem aí já está ansioso pelo próximo álbum? 👀🎶",
        "hashtags": ["#Melo", "#estúdio", "#novasmúsicas"],
        "createdAt": "2025-05-26T15:00:00Z",
        "likes": 980,
        "comments": 132
    },
    {
        "id": 118,
        "author": {
            "id": 24,
            "name": "Jeferson Guimarães",
            "username": "@vc_jeferson",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/24"
        },
        "content": "A música tem esse poder mágico de conectar pessoas que nunca se viram antes. Hoje recebi mensagens de fãs da Argentina e fiquei emocionado demais. 🌎🎵",
        "hashtags": ["#MúsicaÉVida", "#Melo", "#conexão"],
        "createdAt": "2025-05-28T20:15:00Z",
        "likes": 1120,
        "comments": 97
    },
    {
        "id": 119,
        "author": {
            "id": 24,
            "name": "Jeferson Guimarães",
            "username": "@vc_jeferson",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/24"
        },
        "content": "Não é só música, é família. Obrigado, Melo, por estarmos juntos nessa jornada há tantos anos. Vocês são meus irmãos. 🙏🎸",
        "hashtags": ["#Melo", "#família", "#rocknroll"],
        "createdAt": "2025-06-01T18:45:00Z",
        "likes": 870,
        "comments": 110
    },
    {
        "id": 120,
        "author": {
            "id": 24,
            "name": "Jeferson Guimarães",
            "username": "@vc_jeferson",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/24"
        },
        "content": "Domingo é dia de relaxar, mas também de inspiração. Escrevendo algumas letras novas… e posso dizer que vem coisa forte por aí. ✍️🔥",
        "hashtags": ["#Melo", "#novasletras", "#inspiração"],
        "createdAt": "2025-06-02T14:20:00Z",
        "likes": 760,
        "comments": 84
    },
    {
        "id": 121,
        "author": {
            "id": 25,
            "name": "Julia Farias",
            "username": "@ju_farias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25"
        },
        "content": "Hoje decidi começar um novo livro e já estou apaixonada pela história. 📖✨",
        "hashtags": ["#leitora", "#amoler", "#novahistoria"],
        "createdAt": "2025-05-23T10:15:00Z",
        "likes": 18,
        "comments": 3
    },
    {
        "id": 122,
        "author": {
            "id": 25,
            "name": "Julia Farias",
            "username": "@ju_farias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25"
        },
        "content": "Um café quente sempre melhora qualquer manhã. ☕🌸",
        "hashtags": ["#bomdia", "#café", "#pequenasalegrias"],
        "createdAt": "2025-05-23T11:40:00Z",
        "likes": 25,
        "comments": 2
    },
    {
        "id": 123,
        "author": {
            "id": 25,
            "name": "Julia Farias",
            "username": "@ju_farias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25"
        },
        "content": "Amanhã tem prova, torçam por mim! 📚✍️",
        "hashtags": ["#prova", "#estudando", "#força"],
        "createdAt": "2025-05-23T20:10:00Z",
        "likes": 14,
        "comments": 5
    },
    {
        "id": 124,
        "author": {
            "id": 25,
            "name": "Julia Farias",
            "username": "@ju_farias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25"
        },
        "content": "Adoro sair para caminhar no fim da tarde, me ajuda a organizar os pensamentos. 🌆🚶‍♀️",
        "hashtags": ["#reflexão", "#fimdetarde", "#bemestar"],
        "createdAt": "2025-05-24T18:30:00Z",
        "likes": 21,
        "comments": 4
    },
    {
        "id": 125,
        "author": {
            "id": 25,
            "name": "Julia Farias",
            "username": "@ju_farias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/25"
        },
        "content": "Fim de semana chegando, já planejando descansar e ver filmes. 🎬💤",
        "hashtags": ["#weekend", "#descanso", "#filmes"],
        "createdAt": "2025-05-24T22:00:00Z",
        "likes": 19,
        "comments": 2
    },
    {
        "id": 126,
        "author": {
            "id": 26,
            "name": "Matheus Ferreira",
            "username": "@matheus_ferreira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/26"
        },
        "content": "Depois de semanas, finalmente consegui zerar aquele jogo difícil. Sensação de conquista! 🎮🔥",
        "hashtags": ["#games", "#vitória", "#diversão"],
        "createdAt": "2025-06-04T19:45:00Z",
        "likes": 33,
        "comments": 5
    },
    {
        "id": 127,
        "author": {
            "id": 26,
            "name": "Matheus Ferreira",
            "username": "@matheus_ferreira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/26"
        },
        "content": "Nada como um bom jogo de futebol com os amigos no fim de semana ⚽🍻",
        "hashtags": ["#futebol", "#amizade", "#resenha"],
        "createdAt": "2025-06-06T22:10:00Z",
        "likes": 41,
        "comments": 6
    },
    {
        "id": 128,
        "author": {
            "id": 26,
            "name": "Matheus Ferreira",
            "username": "@matheus_ferreira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/26"
        },
        "content": "Experimentando algumas linhas de código novas no projeto, quando funciona de primeira é uma alegria! 💻🚀",
        "hashtags": ["#programação", "#devlife", "#sucesso"],
        "createdAt": "2025-06-08T15:30:00Z",
        "likes": 27,
        "comments": 3
    },
    {
        "id": 129,
        "author": {
            "id": 26,
            "name": "Matheus Ferreira",
            "username": "@matheus_ferreira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/26"
        },
        "content": "Maratona de séries iniciada! Alguém aí já assistiu a nova temporada? 🍿📺",
        "hashtags": ["#séries", "#maratona", "#fimdesemana"],
        "createdAt": "2025-06-10T20:20:00Z",
        "likes": 36,
        "comments": 4
    },
    {
        "id": 130,
        "author": {
            "id": 26,
            "name": "Matheus Ferreira",
            "username": "@matheus_ferreira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/26"
        },
        "content": "Treino concluído! Agora é descansar e preparar para a próxima sessão. 🏋️‍♂️💪",
        "hashtags": ["#foco", "#treino", "#disciplina"],
        "createdAt": "2025-06-12T07:15:00Z",
        "likes": 52,
        "comments": 8
    },
    {
        "id": 131,
        "author": {
            "id": 27,
            "name": "Adriana Matias",
            "username": "@adri_matias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27"
        },
        "content": "Nada como uma manhã tranquila para organizar os pensamentos e começar bem o dia. 🌞✨",
        "hashtags": ["#bomdia", "#trabalho", "#motivação"],
        "createdAt": "2025-06-13T08:15:00Z",
        "likes": 23,
        "comments": 4
    },
    {
        "id": 132,
        "author": {
            "id": 27,
            "name": "Adriana Matias",
            "username": "@adri_matias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27"
        },
        "content": "Fim de tarde perfeito para uma caminhada no parque e respirar ar puro. 🌿🍃",
        "hashtags": ["#natureza", "#bemestar", "#caminhada"],
        "createdAt": "2025-06-13T18:45:00Z",
        "likes": 31,
        "comments": 5
    },
    {
        "id": 133,
        "author": {
            "id": 27,
            "name": "Adriana Matias",
            "username": "@adri_matias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27"
        },
        "content": "Tentando novas receitas na cozinha hoje. Quem mais adora cozinhar nos finais de semana? 👩‍🍳🍝",
        "hashtags": ["#cozinha", "#culinária", "#fimdesemana"],
        "createdAt": "2025-06-14T12:30:00Z",
        "likes": 27,
        "comments": 3
    },
    {
        "id": 134,
        "author": {
            "id": 27,
            "name": "Adriana Matias",
            "username": "@adri_matias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27"
        },
        "content": "Sexta-feira chegou! Hora de relaxar, ouvir música e recarregar as energias. 🎶💆‍♀️",
        "hashtags": ["#sexto", "#relax", "#musica"],
        "createdAt": "2025-06-15T19:00:00Z",
        "likes": 38,
        "comments": 6
    },
    {
        "id": 135,
        "author": {
            "id": 27,
            "name": "Adriana Matias",
            "username": "@adri_matias",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/27"
        },
        "content": "Refletindo sobre os pequenos momentos que tornam a vida especial. ✨❤️",
        "hashtags": ["#reflexão", "#vida", "#gratidão"],
        "createdAt": "2025-06-16T21:20:00Z",
        "likes": 29,
        "comments": 4
    },
    {
        "id": 136,
        "author": {
            "id": 28,
            "name": "Júlio Campos",
            "username": "@eu_julio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28"
        },
        "content": "Treino pesado hoje, mas cada gota de suor vale a pena! 💪⚽",
        "hashtags": ["#treino", "#foco", "#futebol"],
        "createdAt": "2025-06-17T09:00:00Z",
        "likes": 112,
        "comments": 14
    },
    {
        "id": 137,
        "author": {
            "id": 28,
            "name": "Júlio Campos",
            "username": "@eu_julio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28"
        },
        "content": "Dia de jogo! Vamos com tudo, equipe! 🏟️🔥",
        "hashtags": ["#gameDay", "#time", "#determinação"],
        "createdAt": "2025-06-18T15:30:00Z",
        "likes": 220,
        "comments": 36
    },
    {
        "id": 138,
        "author": {
            "id": 28,
            "name": "Júlio Campos",
            "username": "@eu_julio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28"
        },
        "content": "Nada como sentir o apoio da torcida! Vocês são demais! 🙌❤️",
        "hashtags": ["#torcida", "#gratidão", "#futebol"],
        "createdAt": "2025-06-18T20:45:00Z",
        "likes": 315,
        "comments": 48
    },
    {
        "id": 139,
        "author": {
            "id": 28,
            "name": "Júlio Campos",
            "username": "@eu_julio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28"
        },
        "content": "Treino de recuperação concluído. Corpo em dia, mente focada! 🏃‍♂️💨",
        "hashtags": ["#recuperação", "#saúde", "#futebol"],
        "createdAt": "2025-06-19T10:00:00Z",
        "likes": 98,
        "comments": 12
    },
    {
        "id": 140,
        "author": {
            "id": 28,
            "name": "Júlio Campos",
            "username": "@eu_julio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/28"
        },
        "content": "Domingo tranquilo para recarregar energias e se preparar para a próxima semana. 🌤️⚽",
        "hashtags": ["#descanso", "#preparação", "#futebol"],
        "createdAt": "2025-06-21T18:30:00Z",
        "likes": 75,
        "comments": 9
    },
    {
        "id": 141,
        "author": {
            "id": 29,
            "name": "Luciano Primo",
            "username": "@luciano_primo7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/29"
        },
        "content": "Debugando um código C++ que parecia impossível de resolver… depois de horas, a vitória! 💻🔥",
        "hashtags": ["#C++", "#programação", "#debug"],
        "createdAt": "2025-06-22T14:30:00Z",
        "likes": 45,
        "comments": 7
    },
    {
        "id": 142,
        "author": {
            "id": 29,
            "name": "Luciano Primo",
            "username": "@luciano_primo7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/29"
        },
        "content": "Aprendendo a otimizar loops e melhorar a performance dos meus programas. C++ é um desafio constante! ⚡💻",
        "hashtags": ["#C++", "#performance", "#devlife"],
        "createdAt": "2025-06-23T11:15:00Z",
        "likes": 38,
        "comments": 5
    },
    {
        "id": 143,
        "author": {
            "id": 29,
            "name": "Luciano Primo",
            "username": "@luciano_primo7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/29"
        },
        "content": "Nada como aquele momento em que o código finalmente compila sem erros. A sensação é inexplicável! 🖥️✨",
        "hashtags": ["#programador", "#C++", "#sucesso"],
        "createdAt": "2025-06-24T09:50:00Z",
        "likes": 52,
        "comments": 8
    },
    {
        "id": 144,
        "author": {
            "id": 29,
            "name": "Luciano Primo",
            "username": "@luciano_primo7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/29"
        },
        "content": "Estudando estruturas de dados hoje. A base de um bom programador nunca acaba! 📚💡",
        "hashtags": ["#C++", "#estudando", "#devlife"],
        "createdAt": "2025-06-25T16:20:00Z",
        "likes": 41,
        "comments": 6
    },
    {
        "id": 145,
        "author": {
            "id": 29,
            "name": "Luciano Primo",
            "username": "@luciano_primo7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/29"
        },
        "content": "Finalizando o projeto da semana. Pequenos passos todos os dias levam a grandes conquistas! 🚀💻",
        "hashtags": ["#programação", "#C++", "#projetos"],
        "createdAt": "2025-06-26T19:40:00Z",
        "likes": 47,
        "comments": 5
    },
    {
        "id": 146,
        "author": {
            "id": 30,
            "name": "Tadeu Trindade",
            "username": "@tadeu_trindade",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/30"
        },
        "content": "Aproveitando o domingo para relaxar e colocar a leitura em dia. 📖☕",
        "hashtags": ["#leitura", "#domingo", "#relax"],
        "createdAt": "2025-06-27T09:30:00Z",
        "likes": 28,
        "comments": 4
    },
    {
        "id": 147,
        "author": {
            "id": 30,
            "name": "Tadeu Trindade",
            "username": "@tadeu_trindade",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/30"
        },
        "content": "Nada como uma boa caminhada ao ar livre para recarregar as energias. 🌳🚶‍♂️",
        "hashtags": ["#natureza", "#saúde", "#bemestar"],
        "createdAt": "2025-06-28T18:15:00Z",
        "likes": 35,
        "comments": 5
    },
    {
        "id": 148,
        "author": {
            "id": 30,
            "name": "Tadeu Trindade",
            "username": "@tadeu_trindade",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/30"
        },
        "content": "Testando novas receitas na cozinha hoje. Quem mais adora cozinhar nos finais de semana? 👨‍🍳🍝",
        "hashtags": ["#cozinha", "#culinária", "#diversão"],
        "createdAt": "2025-06-29T12:40:00Z",
        "likes": 22,
        "comments": 3
    },
    {
        "id": 149,
        "author": {
            "id": 30,
            "name": "Tadeu Trindade",
            "username": "@tadeu_trindade",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/30"
        },
        "content": "Sexta-feira chegou! Hora de curtir, relaxar e aproveitar com amigos. 🎉🍻",
        "hashtags": ["#sextou", "#amizade", "#fimdesemana"],
        "createdAt": "2025-07-01T19:00:00Z",
        "likes": 40,
        "comments": 6
    },
    {
        "id": 150,
        "author": {
            "id": 30,
            "name": "Tadeu Trindade",
            "username": "@tadeu_trindade",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/30"
        },
        "content": "Refletindo sobre a semana e planejando os próximos passos. Cada dia é uma nova oportunidade. ✨📅",
        "hashtags": ["#reflexão", "#planejamento", "#vida"],
        "createdAt": "2025-07-02T21:10:00Z",
        "likes": 31,
        "comments": 4
    },
    {
        "id": 151,
        "author": {
            "id": 31,
            "name": "Santiago Gárcia",
            "username": "@sant_01",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/31"
        },
        "content": "Disfrutando de un buen café en la mañana ☕🌞",
        "hashtags": ["#café", "#mañana", "#relax"],
        "createdAt": "2025-07-03T08:15:00Z",
        "likes": 25,
        "comments": 3
    },
    {
        "id": 152,
        "author": {
            "id": 31,
            "name": "Santiago Gárcia",
            "username": "@sant_01",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/31"
        },
        "content": "Fin de semana perfecto para una caminata por el parque y disfrutar la naturaleza 🌿🚶‍♂️",
        "hashtags": ["#naturaleza", "#parque", "#bienestar"],
        "createdAt": "2025-07-04T17:30:00Z",
        "likes": 32,
        "comments": 5
    },
    {
        "id": 153,
        "author": {
            "id": 31,
            "name": "Santiago Gárcia",
            "username": "@sant_01",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/31"
        },
        "content": "Probando nuevas recetas mexicanas en la cocina. ¡Delicioso! 🌮👨‍🍳",
        "hashtags": ["#cocina", "#mexicano", "#recetas"],
        "createdAt": "2025-07-05T12:20:00Z",
        "likes": 29,
        "comments": 4
    },
    {
        "id": 154,
        "author": {
            "id": 31,
            "name": "Santiago Gárcia",
            "username": "@sant_01",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/31"
        },
        "content": "Disfrutando del fútbol con amigos y buena compañía ⚽🍻",
        "hashtags": ["#fútbol", "#amistad", "#diversión"],
        "createdAt": "2025-07-06T20:10:00Z",
        "likes": 40,
        "comments": 7
    },
    {
        "id": 155,
        "author": {
            "id": 31,
            "name": "Santiago Gárcia",
            "username": "@sant_01",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/31"
        },
        "content": "Reflexionando sobre la semana y preparando metas para la próxima ✨📅",
        "hashtags": ["#reflexión", "#metas", "#vida"],
        "createdAt": "2025-07-07T21:45:00Z",
        "likes": 33,
        "comments": 5
    },
    {
        "id": 156,
        "author": {
            "id": 32,
            "name": "Jasper Walter",
            "username": "@jas_walter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/32"
        },
        "content": "Experimenting with new beats for my next set. Music is life! 🎧🔥",
        "hashtags": ["#DJLife", "#music", "#beats"],
        "createdAt": "2025-07-08T14:20:00Z",
        "likes": 210,
        "comments": 28
    },
    {
        "id": 157,
        "author": {
            "id": 32,
            "name": "Jasper Walter",
            "username": "@jas_walter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/32"
        },
        "content": "Composing new tracks and exploring different sounds. Creativity at full speed! 🎹✨",
        "hashtags": ["#composer", "#musicproduction", "#creative"],
        "createdAt": "2025-07-09T11:45:00Z",
        "likes": 185,
        "comments": 22
    },
    {
        "id": 158,
        "author": {
            "id": 32,
            "name": "Jasper Walter",
            "username": "@jas_walter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/32"
        },
        "content": "Night DJ set completed! The energy on the dance floor is incredible. 🙌🎶",
        "hashtags": ["#DJSet", "#nightlife", "#musiclover"],
        "createdAt": "2025-07-10T02:15:00Z",
        "likes": 240,
        "comments": 31
    },
    {
        "id": 159,
        "author": {
            "id": 32,
            "name": "Jasper Walter",
            "username": "@jas_walter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/32"
        },
        "content": "Working on a new collab with local artists. Music brings people together! 🎼🤝",
        "hashtags": ["#collab", "#musiccommunity", "#creative"],
        "createdAt": "2025-07-11T16:50:00Z",
        "likes": 198,
        "comments": 26
    },
    {
        "id": 160,
        "author": {
            "id": 32,
            "name": "Jasper Walter",
            "username": "@jas_walter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/32"
        },
        "content": "Finishing the mix of a new track. Can’t wait to share it! 🎛️🎶",
        "hashtags": ["#mixing", "#musicproduction", "#DJLife"],
        "createdAt": "2025-07-12T19:30:00Z",
        "likes": 222,
        "comments": 29
    },
    {
        "id": 161,
        "author": {
            "id": 33,
            "name": "Kauê Matos",
            "username": "@eu_kaue",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/33"
        },
        "content": "Capturando a beleza nos momentos do dia a dia. A fotografia é meu jeito de enxergar o mundo. 📸✨",
        "hashtags": ["#fotografia", "#arte", "#inspiração"],
        "createdAt": "2025-07-13T10:15:00Z",
        "likes": 95,
        "comments": 12
    },
    {
        "id": 162,
        "author": {
            "id": 33,
            "name": "Kauê Matos",
            "username": "@eu_kaue",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/33"
        },
        "content": "Experimentando luzes e sombras hoje. Cada clique conta uma história. 🌅📷",
        "hashtags": ["#fotografia", "#criativo", "#arte"],
        "createdAt": "2025-07-14T14:30:00Z",
        "likes": 87,
        "comments": 10
    },
    {
        "id": 163,
        "author": {
            "id": 33,
            "name": "Kauê Matos",
            "username": "@eu_kaue",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/33"
        },
        "content": "Explorando paisagens urbanas e capturando os detalhes escondidos. 🏙️📸",
        "hashtags": ["#urbano", "#fotografia", "#arte"],
        "createdAt": "2025-07-15T16:50:00Z",
        "likes": 78,
        "comments": 8
    },
    {
        "id": 164,
        "author": {
            "id": 33,
            "name": "Kauê Matos",
            "username": "@eu_kaue",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/33"
        },
        "content": "Inspirado pelas cores e texturas. A arte está em todo lugar, basta observar. 🎨👀",
        "hashtags": ["#arte", "#inspiração", "#criatividade"],
        "createdAt": "2025-07-16T11:20:00Z",
        "likes": 102,
        "comments": 14
    },
    {
        "id": 165,
        "author": {
            "id": 33,
            "name": "Kauê Matos",
            "username": "@eu_kaue",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/33"
        },
        "content": "Um novo projeto fotográfico começa hoje. Ansioso para ver onde essa jornada criativa vai me levar! 📷🚀",
        "hashtags": ["#projetofotográfico", "#criatividade", "#fotografia"],
        "createdAt": "2025-07-17T09:45:00Z",
        "likes": 88,
        "comments": 11
    },
    {
        "id": 166,
        "author": {
            "id": 34,
            "name": "Otávio Lucas",
            "username": "@otavio0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/34"
        },
        "content": "Mais um dia intenso no restaurante, mas adoro ver os clientes felizes! 🍽️😊",
        "hashtags": ["#trabalho", "#garçom", "#satisfação"],
        "createdAt": "2025-07-18T12:00:00Z",
        "likes": 22,
        "comments": 3
    },
    {
        "id": 167,
        "author": {
            "id": 34,
            "name": "Otávio Lucas",
            "username": "@otavio0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/34"
        },
        "content": "Aquele momento de calmaria entre os turnos. Hora de recarregar as energias. ☕✨",
        "hashtags": ["#descanso", "#trabalho", "#vida"],
        "createdAt": "2025-07-18T16:30:00Z",
        "likes": 19,
        "comments": 2
    },
    {
        "id": 168,
        "author": {
            "id": 34,
            "name": "Otávio Lucas",
            "username": "@otavio0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/34"
        },
        "content": "Sexta-feira movimentada no restaurante! Nada como ver a equipe unida e eficiente. 👏🍷",
        "hashtags": ["#sextou", "#equipe", "#trabalho"],
        "createdAt": "2025-07-19T20:00:00Z",
        "likes": 27,
        "comments": 4
    },
    {
        "id": 169,
        "author": {
            "id": 34,
            "name": "Otávio Lucas",
            "username": "@otavio0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/34"
        },
        "content": "Aprendendo novas técnicas de atendimento para sempre melhorar a experiência dos clientes. 📝😊",
        "hashtags": ["#aprendizado", "#clientes", "#garçom"],
        "createdAt": "2025-07-20T11:15:00Z",
        "likes": 21,
        "comments": 3
    },
    {
        "id": 170,
        "author": {
            "id": 34,
            "name": "Otávio Lucas",
            "username": "@otavio0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/34"
        },
        "content": "Domingo tranquilo, refletindo sobre a semana e planejando novas metas. 🌤️💪",
        "hashtags": ["#reflexão", "#planejamento", "#vida"],
        "createdAt": "2025-07-21T09:30:00Z",
        "likes": 18,
        "comments": 2
    },
    {
        "id": 171,
        "author": {
            "id": 35,
            "name": "Sandra Dantas",
            "username": "@sandra_dantas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35"
        },
        "content": "Reunião produtiva com a equipe hoje! Adoro ver os resultados do nosso trabalho. 👗📊",
        "hashtags": ["#moda", "#gestão", "#trabalho"],
        "createdAt": "2025-07-22T10:00:00Z",
        "likes": 34,
        "comments": 5
    },
    {
        "id": 172,
        "author": {
            "id": 35,
            "name": "Sandra Dantas",
            "username": "@sandra_dantas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35"
        },
        "content": "Supervisionando a nova coleção e garantindo que tudo esteja impecável! ✨👜",
        "hashtags": ["#modafeminina", "#equipe", "#inspiração"],
        "createdAt": "2025-07-23T14:20:00Z",
        "likes": 40,
        "comments": 6
    },
    {
        "id": 173,
        "author": {
            "id": 35,
            "name": "Sandra Dantas",
            "username": "@sandra_dantas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35"
        },
        "content": "Sexta-feira de planejamento estratégico para a loja. O sucesso vem com organização! 📋💼",
        "hashtags": ["#moda", "#planejamento", "#trabalho"],
        "createdAt": "2025-07-24T09:45:00Z",
        "likes": 28,
        "comments": 4
    },
    {
        "id": 174,
        "author": {
            "id": 35,
            "name": "Sandra Dantas",
            "username": "@sandra_dantas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35"
        },
        "content": "Inspirando a equipe com novas ideias e tendências da moda. 👠✨",
        "hashtags": ["#moda", "#inspiração", "#equipe"],
        "createdAt": "2025-07-25T11:30:00Z",
        "likes": 37,
        "comments": 5
    },
    {
        "id": 175,
        "author": {
            "id": 35,
            "name": "Sandra Dantas",
            "username": "@sandra_dantas",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/35"
        },
        "content": "Fim de semana chegando! Hora de recarregar as energias e voltar com tudo na próxima semana. 🌤️💪",
        "hashtags": ["#fimdesemana", "#motivação", "#trabalho"],
        "createdAt": "2025-07-26T18:00:00Z",
        "likes": 33,
        "comments": 4
    },
    {
        "id": 176,
        "author": {
            "id": 36,
            "name": "Pedro Machado",
            "username": "@pedro8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/36"
        },
        "content": "Aproveitando a manhã para caminhar e tomar um café fresco. ☕🌤️",
        "hashtags": ["#manhã", "#café", "#bemestar"],
        "createdAt": "2025-07-27T08:30:00Z",
        "likes": 21,
        "comments": 2
    },
    {
        "id": 177,
        "author": {
            "id": 36,
            "name": "Pedro Machado",
            "username": "@pedro8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/36"
        },
        "content": "Sexta-feira animada com os amigos! Hora de relaxar e se divertir. 🎉🍻",
        "hashtags": ["#sextou", "#amizade", "#diversão"],
        "createdAt": "2025-07-28T19:00:00Z",
        "likes": 32,
        "comments": 4
    },
    {
        "id": 178,
        "author": {
            "id": 36,
            "name": "Pedro Machado",
            "username": "@pedro8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/36"
        },
        "content": "Passando um tempo na natureza para recarregar as energias. 🌳🌞",
        "hashtags": ["#natureza", "#relax", "#vida"],
        "createdAt": "2025-07-29T16:20:00Z",
        "likes": 25,
        "comments": 3
    },
    {
        "id": 179,
        "author": {
            "id": 36,
            "name": "Pedro Machado",
            "username": "@pedro8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/36"
        },
        "content": "Testando uma nova receita hoje! Cozinhar é sempre uma aventura. 👨‍🍳🍝",
        "hashtags": ["#cozinha", "#culinária", "#diversão"],
        "createdAt": "2025-07-30T12:10:00Z",
        "likes": 27,
        "comments": 2
    },
    {
        "id": 180,
        "author": {
            "id": 36,
            "name": "Pedro Machado",
            "username": "@pedro8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/36"
        },
        "content": "Planejando a semana e definindo novas metas. Cada dia é uma nova oportunidade! ✨📅",
        "hashtags": ["#planejamento", "#motivação", "#vida"],
        "createdAt": "2025-07-31T09:40:00Z",
        "likes": 23,
        "comments": 3
    },
    {
        "id": 181,
        "author": {
            "id": 37,
            "name": "Carlos Abraão",
            "username": "@eu_carlinhos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/37"
        },
        "content": "Descobri um café novo na cidade. Aroma incrível e ambiente acolhedor! ☕🏙️",
        "hashtags": ["#cafénovo", "#descobertas", "#cidade"],
        "createdAt": "2025-08-01T09:00:00Z",
        "likes": 24,
        "comments": 3
    },
    {
        "id": 182,
        "author": {
            "id": 37,
            "name": "Carlos Abraão",
            "username": "@eu_carlinhos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/37"
        },
        "content": "Passeio de bicicleta ao entardecer. Nada como sentir o vento no rosto. 🚴‍♂️🌇",
        "hashtags": ["#bike", "#aventura", "#paz"],
        "createdAt": "2025-08-02T18:15:00Z",
        "likes": 28,
        "comments": 4
    },
    {
        "id": 183,
        "author": {
            "id": 37,
            "name": "Carlos Abraão",
            "username": "@eu_carlinhos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/37"
        },
        "content": "Aprendendo a tocar violão sozinho. Cada acorde é uma conquista! 🎸✨",
        "hashtags": ["#violão", "#aprendizado", "#musica"],
        "createdAt": "2025-08-03T14:40:00Z",
        "likes": 32,
        "comments": 5
    },
    {
        "id": 184,
        "author": {
            "id": 37,
            "name": "Carlos Abraão",
            "username": "@eu_carlinhos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/37"
        },
        "content": "Fim de tarde na praia refletindo sobre a vida. Simples momentos são os melhores. 🌊🌅",
        "hashtags": ["#praia", "#reflexão", "#vida"],
        "createdAt": "2025-08-04T17:50:00Z",
        "likes": 30,
        "comments": 4
    },
    {
        "id": 185,
        "author": {
            "id": 37,
            "name": "Carlos Abraão",
            "username": "@eu_carlinhos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/37"
        },
        "content": "Descobrindo novos restaurantes na cidade e experimentando pratos incríveis! 🍲🍴",
        "hashtags": ["#gastronomia", "#descobertas", "#cidade"],
        "createdAt": "2025-08-05T12:25:00Z",
        "likes": 27,
        "comments": 3
    },
    {
        "id": 186,
        "author": {
            "id": 38,
            "name": "Pedro Loss",
            "username": "@pedro_loss",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/38"
        },
        "content": "Começando a semana com energia e foco total! 💪✨",
        "hashtags": ["#motivação", "#energia", "#foco"],
        "createdAt": "2025-08-06T08:00:00Z",
        "likes": 25,
        "comments": 4
    },
    {
        "id": 187,
        "author": {
            "id": 38,
            "name": "Pedro Loss",
            "username": "@pedro_loss",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/38"
        },
        "content": "Descobrindo novas trilhas para corrida. A natureza sempre inspira! 🏞️🏃‍♂️",
        "hashtags": ["#corrida", "#natureza", "#inspiração"],
        "createdAt": "2025-08-07T07:30:00Z",
        "likes": 30,
        "comments": 5
    },
    {
        "id": 188,
        "author": {
            "id": 38,
            "name": "Pedro Loss",
            "username": "@pedro_loss",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/38"
        },
        "content": "Tarde de leitura e aprendizado. Conhecimento nunca é demais! 📚✨",
        "hashtags": ["#leitura", "#aprendizado", "#conhecimento"],
        "createdAt": "2025-08-08T15:20:00Z",
        "likes": 27,
        "comments": 3
    },
    {
        "id": 189,
        "author": {
            "id": 38,
            "name": "Pedro Loss",
            "username": "@pedro_loss",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/38"
        },
        "content": "Experimentando uma nova receita no jantar. Cozinhar é um prazer! 🍳🍝",
        "hashtags": ["#culinária", "#cozinha", "#prazer"],
        "createdAt": "2025-08-09T19:00:00Z",
        "likes": 23,
        "comments": 2
    },
    {
        "id": 190,
        "author": {
            "id": 38,
            "name": "Pedro Loss",
            "username": "@pedro_loss",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/38"
        },
        "content": "Noite tranquila para refletir sobre a semana e planejar novos objetivos. 🌙📝",
        "hashtags": ["#reflexão", "#planejamento", "#vida"],
        "createdAt": "2025-08-10T21:30:00Z",
        "likes": 26,
        "comments": 3
    },
    {
        "id": 191,
        "author": {
            "id": 39,
            "name": "Fabíola Martins",
            "username": "@fa_martins0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39"
        },
        "content": "Iniciando o dia com uma boa caminhada pelo bairro. Saúde em primeiro lugar! 🚶‍♀️🌞",
        "hashtags": ["#saúde", "#caminhada", "#manhã"],
        "createdAt": "2025-08-11T07:00:00Z",
        "likes": 19,
        "comments": 2
    },
    {
        "id": 192,
        "author": {
            "id": 39,
            "name": "Fabíola Martins",
            "username": "@fa_martins0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39"
        },
        "content": "Hora de colocar a leitura em dia. Nada como aprender algo novo todos os dias! 📖✨",
        "hashtags": ["#leitura", "#aprendizado", "#conhecimento"],
        "createdAt": "2025-08-11T15:30:00Z",
        "likes": 22,
        "comments": 3
    },
    {
        "id": 193,
        "author": {
            "id": 39,
            "name": "Fabíola Martins",
            "username": "@fa_martins0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39"
        },
        "content": "Final de semana perfeito para um café com os amigos e boas conversas. ☕👥",
        "hashtags": ["#amizade", "#café", "#fimdesemana"],
        "createdAt": "2025-08-12T10:45:00Z",
        "likes": 24,
        "comments": 4
    },
    {
        "id": 194,
        "author": {
            "id": 39,
            "name": "Fabíola Martins",
            "username": "@fa_martins0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39"
        },
        "content": "Explorando novos sabores na cozinha hoje. Amo testar receitas diferentes! 🍳🥗",
        "hashtags": ["#culinária", "#cozinha", "#experimentar"],
        "createdAt": "2025-08-12T18:20:00Z",
        "likes": 21,
        "comments": 3
    },
    {
        "id": 195,
        "author": {
            "id": 39,
            "name": "Fabíola Martins",
            "username": "@fa_martins0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/39"
        },
        "content": "Noite tranquila para refletir e planejar a semana que vem. Organização é tudo! 📝🌙",
        "hashtags": ["#planejamento", "#reflexão", "#vida"],
        "createdAt": "2025-08-13T21:00:00Z",
        "likes": 20,
        "comments": 2
    },
    {
        "id": 196,
        "author": {
            "id": 40,
            "name": "Maria de Fátima Cardoso",
            "username": "@maria_cardoso",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40"
        },
        "content": "Manhã ensolarada perfeita para organizar a casa e começar o dia com energia! ☀️🏡",
        "hashtags": ["#manhã", "#energia", "#organização"],
        "createdAt": "2025-08-14T08:00:00Z",
        "likes": 21,
        "comments": 3
    },
    {
        "id": 197,
        "author": {
            "id": 40,
            "name": "Maria de Fátima Cardoso",
            "username": "@maria_cardoso",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40"
        },
        "content": "Tarde de chá com amigas, boas conversas e risadas garantidas. 🍵💛",
        "hashtags": ["#amizade", "#chá", "#diversão"],
        "createdAt": "2025-08-14T15:30:00Z",
        "likes": 27,
        "comments": 4
    },
    {
        "id": 198,
        "author": {
            "id": 40,
            "name": "Maria de Fátima Cardoso",
            "username": "@maria_cardoso",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40"
        },
        "content": "Adoro tardes de leitura no jardim. Paz e inspiração em cada página. 📖🌸",
        "hashtags": ["#leitura", "#inspiração", "#jardim"],
        "createdAt": "2025-08-15T16:00:00Z",
        "likes": 23,
        "comments": 3
    },
    {
        "id": 199,
        "author": {
            "id": 40,
            "name": "Maria de Fátima Cardoso",
            "username": "@maria_cardoso",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40"
        },
        "content": "Preparando um jantar especial para a família. Momentos simples são os melhores! 🍲❤️",
        "hashtags": ["#família", "#culinária", "#momentos"],
        "createdAt": "2025-08-15T19:45:00Z",
        "likes": 29,
        "comments": 5
    },
    {
        "id": 200,
        "author": {
            "id": 40,
            "name": "Maria de Fátima Cardoso",
            "username": "@maria_cardoso",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/40"
        },
        "content": "Final de domingo refletindo sobre a semana e traçando novos objetivos. 🌙📝",
        "hashtags": ["#reflexão", "#planejamento", "#vida"],
        "createdAt": "2025-08-16T20:30:00Z",
        "likes": 26,
        "comments": 4
    },
    {
        "id": 201,
        "author": {
            "id": 41,
            "name": "Letícia Ferraz",
            "username": "@leh7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41"
        },
        "content": "Hoje acordei mais leve, às vezes tudo o que precisamos é de silêncio e um bom café. ☕✨",
        "hashtags": ["#paz", "#silêncio", "#café"],
        "createdAt": "2025-08-17T08:15:00Z",
        "likes": 31,
        "omments": 3
    },
    {
        "id": 202,
        "author": {
            "id": 41,
            "name": "Letícia Ferraz",
            "username": "@leh7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41"
        },
        "content": "Uma caminhada pela manhã muda completamente a energia do dia. 🚶‍♀️🌞",
        "hashtags": ["#energia", "#bemestar", "#vida"],
        "createdAt": "2025-08-17T09:00:00Z",
        "likes": 45,
        "comments": 6
    },
    {
        "id": 203,
        "author": {
            "id": 41,
            "name": "Letícia Ferraz",
            "username": "@leh7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41"
        },
        "content": "Não subestime o poder de um pequeno passo todos os dias. 🪄🌱",
        "hashtags": ["#motivação", "#crescimento", "#consistência"],
        "createdAt": "2025-08-17T12:20:00Z",
        "likes": 52,
        "comments": 7
    },
    {
        "id": 204,
        "author": {
            "id": 41,
            "name": "Letícia Ferraz",
            "username": "@leh7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41"
        },
        "content": "Domingo é dia de organizar a mente e preparar o coração para a semana. 💫🗓️",
        "hashtags": ["#organização", "#domingo", "#equilíbrio"],
        "createdAt": "2025-08-17T18:40:00Z",
        "likes": 38,
        "comments": 5
    },
    {
        "id": 205,
        "author": {
            "id": 41,
            "name": "Letícia Ferraz",
            "username": "@leh7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/41"
        },
        "content": "A gratidão transforma a forma como enxergamos cada detalhe da vida. 🌺🙏",
        "hashtags": ["#gratidão", "#vida", "#positividade"],
        "createdAt": "2025-08-17T21:10:00Z",
        "likes": 47,
        "comments": 8
    },
    {
        "id": 206,
        "author": {
            "id": 42,
            "name": "Carolina Carpenter",
            "username": "@carolilna_carpenter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42"
        },
        "content": "Começando a semana com café forte e boas ideias. ☕💡",
        "hashtags": ["#segunda", "#energia", "#boasvibrações"],
        "createdAt": "2025-08-18T08:15:00Z",
        "likes": 18,
        "comments": 2
    },
    {
        "id": 207,
        "author": {
            "id": 42,
            "name": "Carolina Carpenter",
            "username": "@carolilna_carpenter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42"
        },
        "content": "Nada como uma boa playlist para acompanhar o trabalho. 🎶💻",
        "hashtags": ["#música", "#trabalho", "#produtividade"],
        "createdAt": "2025-08-18T11:40:00Z",
        "likes": 22,
        "comments": 3
    },
    {
        "id": 208,
        "author": {
            "id": 42,
            "name": "Carolina Carpenter",
            "username": "@carolilna_carpenter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42"
        },
        "content": "Às vezes, tudo o que precisamos é de uma pausa para respirar fundo. 🌿✨",
        "hashtags": ["#equilíbrio", "#bemestar", "#paz"],
        "createdAt": "2025-08-18T14:10:00Z",
        "likes": 29,
        "comments": 5
    },
    {
        "id": 209,
        "author": {
            "id": 42,
            "name": "Carolina Carpenter",
            "username": "@carolilna_carpenter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42"
        },
        "content": "Cada dia é uma nova oportunidade de escrever nossa própria história. 📖🌟",
        "hashtags": ["#motivação", "#inspiração", "#vida"],
        "createdAt": "2025-08-18T17:55:00Z",
        "likes": 35,
        "comments": 6
    },
    {
        "id": 210,
        "author": {
            "id": 42,
            "name": "Carolina Carpenter",
            "username": "@carolilna_carpenter",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/42"
        },
        "content": "Um pôr do sol sempre traz a sensação de recomeço. 🌅❤️",
        "hashtags": ["#pordosol", "#natureza", "#gratidão"],
        "createdAt": "2025-08-18T19:45:00Z",
        "likes": 41,
        "comments": 7
    },
    {
        "id": 211,
        "author": {
            "id": 43,
            "name": "Vincent Bauboa",
            "username": "@vincent",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/43"
        },
        "content": "Spent the whole night in the studio and finally finished a track that feels like pure magic. Can’t wait to share it. 🎶✨",
        "hashtags": ["#music", "#studio", "#newtrack"],
        "createdAt": "2025-08-17T03:10:00Z",
        "likes": 87,
        "comments": 15
    },
    {
        "id": 212,
        "author": {
            "id": 43,
            "name": "Vincent Bauboa",
            "username": "@vincent",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/43"
        },
        "content": "Sometimes the best songs come from the simplest moments. Just me, my guitar, and the sunset. 🌅🎸",
        "hashtags": ["#songwriting", "#artistlife", "#inspiration"],
        "createdAt": "2025-08-17T22:45:00Z",
        "likes": 65,
        "comments": 9
    },
    {
        "id": 213,
        "author": {
            "id": 43,
            "name": "Vincent Bauboa",
            "username": "@vincent",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/43"
        },
        "content": "Performing live is where I feel most alive. Thank you to everyone who came out last night—your energy was unreal! 🔥🙌",
        "hashtags": ["#livemusic", "#performance", "#gratitude"],
        "createdAt": "2025-08-18T04:30:00Z",
        "likes": 142,
        "comments": 22
    },
    {
        "id": 214,
        "author": {
            "id": 43,
            "name": "Vincent Bauboa",
            "username": "@vincent",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/43"
        },
        "content": "Art isn’t about perfection, it’s about connection. Every note, every lyric, is a piece of my soul. 🎤💫",
        "hashtags": ["#artist", "#creativity", "#musicislife"],
        "createdAt": "2025-08-18T11:20:00Z",
        "likes": 73,
        "comments": 12
    },
    {
        "id": 215,
        "author": {
            "id": 43,
            "name": "Vincent Bauboa",
            "username": "@vincent",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/43"
        },
        "content": "Working on a collab with an incredible musician—this one’s gonna surprise you. Stay tuned. 👀🎵",
        "hashtags": ["#collaboration", "#newmusic", "#artistlife"],
        "createdAt": "2025-08-18T18:55:00Z",
        "likes": 99,
        "comments": 18
    },
    {
        "id": 216,
        "author": {
            "id": 44,
            "name": "Ludmila Melo",
            "username": "@luh_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44"
        },
        "content": "A vida é feita de pequenos momentos que se tornam grandes lembranças. 💫",
        "hashtags": ["#momentos", "#lembranças", "#vida"],
        "createdAt": "2025-08-18T09:15:00Z",
        "likes": 34,
        "comments": 6
    },
    {
        "id": 217,
        "author": {
            "id": 44,
            "name": "Ludmila Melo",
            "username": "@luh_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44"
        },
        "content": "A persistência transforma sonhos em realidade. ✨",
        "hashtags": ["#foco", "#determinação", "#sonhos"],
        "createdAt": "2025-08-18T11:20:00Z",
        "likes": 41,
        "comments": 5
    },
    {
        "id": 218,
        "author": {
            "id": 44,
            "name": "Ludmila Melo",
            "username": "@luh_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44"
        },
        "content": "Nada como uma boa música para mudar o humor do dia. 🎶",
        "hashtags": ["#música", "#goodvibes", "#energia"],
        "createdAt": "2025-08-18T14:45:00Z",
        "likes": 28,
        "comments": 3
    },
    {
        "id": 219,
        "author": {
            "id": 44,
            "name": "Ludmila Melo",
            "username": "@luh_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44"
        },
        "content": "Gratidão por cada conquista, por menor que seja. 🌻",
        "hashtags": ["#gratidão", "#positividade", "#conquistas"],
        "createdAt": "2025-08-18T17:10:00Z",
        "likes": 39,
        "comments": 7
    },
    {
        "id": 220,
        "author": {
            "id": 44,
            "name": "Ludmila Melo",
            "username": "@luh_melo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/44"
        },
        "content": "Um passo de cada vez, mas sempre em frente. 🚶‍♀️",
        "hashtags": ["#foco", "#determinação", "#força"],
        "createdAt": "2025-08-18T19:30:00Z",
        "likes": 32,
        "comments": 4
    },
    {
        "id": 221,
        "author": {
            "id": 45,
            "name": "Thiago Machado",
            "username": "@thiago_machado0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/45"
        },
        "content": "Segunda-feira começando e já tô cheio de planos pra colocar em prática. 🚀💡",
        "hashtags": ["#foco", "#motivação", "#novasemana"],
        "createdAt": "2025-08-18T08:00:00Z",
        "likes": 34,
        "comments": 7
    },
    {
        "id": 222,
        "author": {
            "id": 45,
            "name": "Thiago Machado",
            "username": "@thiago_machado0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/45"
        },
        "content": "Às vezes, um café forte resolve metade dos problemas do dia. ☕🔥",
        "hashtags": ["#café", "#rotina", "#vida"],
        "createdAt": "2025-08-18T10:15:00Z",
        "likes": 21,
        "comments": 3
    },
    {
        "id": 223,
        "author": {
            "id": 45,
            "name": "Thiago Machado",
            "username": "@thiago_machado0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/45"
        },
        "content": "No meio da correria, a gente precisa aprender a celebrar as pequenas vitórias. 🎉✨",
        "hashtags": ["#gratidão", "#vitórias", "#positividade"],
        "createdAt": "2025-08-18T14:40:00Z",
        "likes": 48,
        "comments": 9
    },
    {
        "id": 224,
        "author": {
            "id": 45,
            "name": "Thiago Machado",
            "username": "@thiago_machado0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/45"
        },
        "content": "Música alta e mente leve. Nada melhor pra seguir o dia. 🎶😌",
        "hashtags": ["#música", "#relaxar", "#energia"],
        "createdAt": "2025-08-18T18:10:00Z",
        "likes": 27,
        "comments": 6
    },
    {
        "id": 225,
        "author": {
            "id": 45,
            "name": "Thiago Machado",
            "username": "@thiago_machado0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/45"
        },
        "content": "Fechando o dia com a sensação de dever cumprido. 🙏✨",
        "hashtags": ["#paz", "#fimdedia", "#equilíbrio"],
        "createdAt": "2025-08-18T22:00:00Z",
        "likes": 39,
        "comments": 5
    },
    {
        "id": 226,
        "author": {
            "id": 46,
            "name": "Andressa Fernandes",
            "username": "@drê_fernandes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46"
        },
        "content": "Comprei uma planta pra dar vida à sala… dois dias depois ela me olha como se dissesse: “me devolve pro mato, criatura”. 🌱😂",
        "hashtags": ["#vidaemcasa", "#plantas", "#humor"],
        "createdAt": "2025-08-19T09:15:00Z",
        "likes": 45,
        "comments": 7
    },
    {
        "id": 227,
        "author": {
            "id": 46,
            "name": "Andressa Fernandes",
            "username": "@drê_fernandes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46"
        },
        "content": "Eu tentando comer saudável: salada e frango grelhado. Duas horas depois: “cadê meu brigadeiro, gente?” 🍫🙃",
        "hashtags": ["#alimentação", "#humor", "#gula"],
        "createdAt": "2025-08-19T11:30:00Z",
        "likes": 52,
        "comments": 8
    },
    {
        "id": 228,
        "author": {
            "id": 46,
            "name": "Andressa Fernandes",
            "username": "@drê_fernandes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46"
        },
        "content": "Quem inventou segunda-feira devia estar de mal com a humanidade. Só pode. ☕️😭",
        "hashtags": ["#segunda-feira", "#realidade", "#humor"],
        "createdAt": "2025-08-19T08:00:00Z",
        "likes": 38,
        "comments": 6
    },
    {
        "id": 229,
        "author": {
            "id": 46,
            "name": "Andressa Fernandes",
            "username": "@drê_fernandes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46"
        },
        "content": "Jurei que ia dormir cedo ontem… lembrei de “só um episódio”. Agora tô aqui parecendo um zumbi elegante. 🧟‍♀️📺",
        "hashtags": ["#sono", "#séries", "#humor"],
        "createdAt": "2025-08-19T23:15:00Z",
        "likes": 41,
        "comments": 5
    },
    {
        "id": 230,
        "author": {
            "id": 46,
            "name": "Andressa Fernandes",
            "username": "@drê_fernandes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/46"
        },
        "content": "Fazer lista de tarefas e… esquecer onde coloquei a lista. Produtividade nível expert. 📝😅",
        "hashtags": ["#organização", "#humor", "#vida"],
        "createdAt": "2025-08-19T14:45:00Z",
        "likes": 36,
        "comments": 4
    },
    {
        "id": 231,
        "author": {
            "id": 47,
            "name": "Mario Alves",
            "username": "@mario_alves",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/47"
        },
        "content": "Experimentando novas técnicas de pintura hoje. Cada traço é uma descoberta. 🎨✨",
        "hashtags": ["#arte", "#pintura", "#criatividade"],
        "createdAt": "2025-08-19T10:00:00Z",
        "likes": 52,
        "comments": 8
    },
    {
        "id": 232,
        "author": {
            "id": 47,
            "name": "Mario Alves",
            "username": "@mario_alves",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/47"
        },
        "content": "Nada como ouvir jazz enquanto o pincel dança sobre a tela. 🎷🖌️",
        "hashtags": ["#arte", "#jazz", "#inspiração"],
        "createdAt": "2025-08-19T12:30:00Z",
        "likes": 47,
        "comments": 6
    },
    {
        "id": 233,
        "author": {
            "id": 47,
            "name": "Mario Alves",
            "username": "@mario_alves",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/47"
        },
        "content": "Uma obra nunca está pronta, apenas em constante evolução. 🖌️🌟",
        "hashtags": ["#arte", "#evolução", "#criatividade"],
        "createdAt": "2025-08-19T15:00:00Z",
        "likes": 61,
        "comments": 9
    },
    {
        "id": 234,
        "author": {
            "id": 47,
            "name": "Mario Alves",
            "username": "@mario_alves",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/47"
        },
        "content": "Participando de uma exposição local. Nada melhor que ver pessoas emocionadas com o que criamos. 🖼️❤️",
        "hashtags": ["#arte", "#exposição", "#emoção"],
        "createdAt": "2025-08-19T18:20:00Z",
        "likes": 73,
        "comments": 12
    },
    {
        "id": 235,
        "author": {
            "id": 47,
            "name": "Mario Alves",
            "username": "@mario_alves",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/47"
        },
        "content": "Criar é o meu refúgio, meu momento de liberdade absoluta. 🌈🎨",
        "hashtags": ["#arte", "#liberdade", "#criatividade"],
        "createdAt": "2025-08-19T20:45:00Z",
        "likes": 59,
        "comments": 7
    },
    {
        "id": 236,
        "author": {
            "id": 48,
            "name": "Amanda Flores",
            "username": "@me_amanda0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48"
        },
        "content": "Hoje acordei com tanta energia… que fui tomar mais um cochilo. 😅🛌",
        "hashtags": ["#vidaReal", "#preguiça", "#humor"],
        "createdAt": "2025-08-20T08:15:00Z",
        "likes": 42,
        "comments": 6
    },
    {
        "id": 237,
        "author": {
            "id": 48,
            "name": "Amanda Flores",
            "username": "@me_amanda0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48"
        },
        "content": "Minha meta do dia: ser produtiva. Realidade: passei horas conversando com meu cachorro. 🐶😂",
        "hashtags": ["#procrastinação", "#humor", "#vida"],
        "createdAt": "2025-08-20T10:30:00Z",
        "likes": 37,
        "comments": 5
    },
    {
        "id": 238,
        "author": {
            "id": 48,
            "name": "Amanda Flores",
            "username": "@me_amanda0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48"
        },
        "content": "Tentei cozinhar… e agora o detector de fumaça tá me xingando. 🍳🔥😅",
        "hashtags": ["#cozinha", "#desastre", "#humor"],
        "createdAt": "2025-08-20T13:00:00Z",
        "likes": 44,
        "comments": 7
    },
    {
        "id": 239,
        "author": {
            "id": 48,
            "name": "Amanda Flores",
            "username": "@me_amanda0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48"
        },
        "content": "Minha dieta: começa amanhã. Meu estômago: começa agora. 🍕🤣",
        "hashtags": ["#dietaFail", "#humor", "#comida"],
        "createdAt": "2025-08-20T15:20:00Z",
        "likes": 50,
        "comments": 8
    },
    {
        "id": 240,
        "author": {
            "id": 48,
            "name": "Amanda Flores",
            "username": "@me_amanda0",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/48"
        },
        "content": "Se rir é o melhor remédio, tô curada de todos os problemas da semana. 😂💊",
        "hashtags": ["#humor", "#alegria", "#vida"],
        "createdAt": "2025-08-20T18:45:00Z",
        "likes": 55,
        "comments": 9
    },
    {
        "id": 241,
        "author": {
            "id": 49,
            "name": "Eliot Page",
            "username": "@eliot_page",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/49"
        },
        "content": "Spent the day exploring new color palettes for my upcoming projects. 🎨✨",
        "hashtags": ["#design", "#colors", "#creativity"],
        "createdAt": "2025-08-21T09:00:00Z",
        "likes": 48,
        "comments": 6
    },
    {
        "id": 242,
        "author": {
            "id": 49,
            "name": "Eliot Page",
            "username": "@eliot_page",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/49"
        },
        "content": "Minimalism is not about what you remove, it’s about what you choose to keep. 🖌️🖤",
        "hashtags": ["#design", "#minimalism", "#inspiration"],
        "createdAt": "2025-08-21T11:15:00Z",
        "likes": 53,
        "comments": 7
    },
    {
        "id": 243,
        "author": {
            "id": 49,
            "name": "Eliot Page",
            "username": "@eliot_page",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/49"
        },
        "content": "Playing with typography is like exploring emotions on a digital canvas. ✍️🎨",
        "hashtags": ["#typography", "#design", "#creativity"],
        "createdAt": "2025-08-21T13:40:00Z",
        "likes": 39,
        "comments": 5
    },
    {
        "id": 244,
        "author": {
            "id": 49,
            "name": "Eliot Page",
            "username": "@eliot_page",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/49"
        },
        "content": "Today my mood is vector and gradient. Always stylish, always creative. 🌈🖌️",
        "hashtags": ["#graphicdesign", "#vector", "#colors"],
        "createdAt": "2025-08-21T16:10:00Z",
        "likes": 46,
        "comments": 6
    },
    {
        "id": 245,
        "author": {
            "id": 49,
            "name": "Eliot Page",
            "username": "@eliot_page",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/49"
        },
        "content": "Nothing beats seeing a clean, functional interface come alive in the user’s hands. 💻✨",
        "hashtags": ["#UX", "#UI", "#design"],
        "createdAt": "2025-08-21T18:45:00Z",
        "likes": 58,
        "comments": 9
    },
    {
        "id": 246,
        "author": {
            "id": 50,
            "name": "Bruce Cane",
            "username": "@me_bruce",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/50"
        },
        "content": "Nothing like a cup of coffee to make Monday feel slightly less like a Monday. ☕😂",
        "hashtags": ["#coffee", "#mondayvibes", "#humor"],
        "createdAt": "2025-08-22T08:15:00Z",
        "likes": 44,
        "comments": 7
    },
    {
        "id": 247,
        "author": {
            "id": 50,
            "name": "Bruce Cane",
            "username": "@me_bruce",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/50"
        },
        "content": "Tried to eat healthy today… ended up negotiating with a slice of pizza. 🍕😅",
        "hashtags": ["#foodie", "#dietfail", "#humor"],
        "createdAt": "2025-08-22T11:00:00Z",
        "likes": 51,
        "comments": 8
    },
    {
        "id": 248,
        "author": {
            "id": 50,
            "name": "Bruce Cane",
            "username": "@me_bruce",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/50"
        },
        "content": "Work-from-home life: pants optional, creativity mandatory. 😎💻",
        "hashtags": ["#wfh", "#humor", "#creativity"],
        "createdAt": "2025-08-22T13:30:00Z",
        "likes": 39,
        "comments": 6
    },
    {
        "id": 249,
        "author": {
            "id": 50,
            "name": "Bruce Cane",
            "username": "@me_bruce",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/50"
        },
        "content": "My plant is judging me for forgetting to water it… silently, but I feel it. 🌱😂",
        "hashtags": ["#plants", "#humor", "#life"],
        "createdAt": "2025-08-22T16:00:00Z",
        "likes": 47,
        "comments": 5
    },
    {
        "id": 250,
        "author": {
            "id": 50,
            "name": "Bruce Cane",
            "username": "@me_bruce",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/50"
        },
        "content": "If procrastination was an Olympic sport, I’d have a gold medal by now. 🏅😅",
        "hashtags": ["#procrastination", "#humor", "#life"],
        "createdAt": "2025-08-22T19:45:00Z",
        "likes": 55,
        "comments": 9
    },
    {
        "id": 251,
        "author": {
            "id": 51,
            "name": "Marcos Benicio",
            "username": "@by_marcos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/51"
        },
        "content": "Hoje fui chamado para consertar um disjuntor… e acabei aprendendo umas gambiarras novas. ⚡😅",
        "hashtags": ["#eletricista", "#trabalho", "#humor"],
        "createdAt": "2025-08-23T08:30:00Z",
        "likes": 38,
        "comments": 5
    },
    {
        "id": 252,
        "author": {
            "id": 51,
            "name": "Marcos Benicio",
            "username": "@by_marcos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/51"
        },
        "content": "Nada como a sensação de acender a luz depois de horas mexendo em fiação antiga. 💡✨",
        "hashtags": ["#eletricista", "#trabalho", "#satisfação"],
        "createdAt": "2025-08-23T10:15:00Z",
        "likes": 45,
        "comments": 6
    },
    {
        "id": 253,
        "author": {
            "id": 51,
            "name": "Marcos Benicio",
            "username": "@by_marcos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/51"
        },
        "content": "Quando o cliente diz “não sei onde é o problema” e você encontra tudo desligado… 😂⚡",
        "hashtags": ["#humor", "#eletricista", "#trabalho"],
        "createdAt": "2025-08-23T12:40:00Z",
        "likes": 50,
        "comments": 7
    },
    {
        "id": 254,
        "author": {
            "id": 51,
            "name": "Marcos Benicio",
            "username": "@by_marcos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/51"
        },
        "content": "Luzes piscando? Possível curto. Eu piscando? Possível sono. ⚡😴",
        "hashtags": ["#eletricista", "#humor", "#vida"],
        "createdAt": "2025-08-23T15:20:00Z",
        "likes": 42,
        "comments": 5
    },
    {
        "id": 255,
        "author": {
            "id": 51,
            "name": "Marcos Benicio",
            "username": "@by_marcos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/51"
        },
        "content": "Se a eletricidade fosse dinheiro, eu seria milionário! 💸⚡😂",
        "hashtags": ["#eletricista", "#humor", "#vida"],
        "createdAt": "2025-08-23T18:00:00Z",
        "likes": 55,
        "comments": 8
    },
    {
        "id": 256,
        "author": {
            "id": 52,
            "name": "Lore Macclincy",
            "username": "@me_lore",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52"
        },
        "content": "Woke up to a snowy morning and realized my coffee was the only thing keeping me warm. ❄️☕️",
        "hashtags": ["#winter", "#coffee", "#morningvibes"],
        "createdAt": "2025-08-24T08:00:00Z",
        "likes": 48,
        "comments": 6
    },
    {
        "id": 257,
        "author": {
            "id": 52,
            "name": "Lore Macclincy",
            "username": "@me_lore",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52"
        },
        "content": "Trying to stay productive, but my cat clearly has other plans. 🐱😂",
        "hashtags": ["#catlife", "#humor", "#workfromhome"],
        "createdAt": "2025-08-24T10:30:00Z",
        "likes": 52,
        "comments": 7
    },
    {
        "id": 258,
        "author": {
            "id": 52,
            "name": "Lore Macclincy",
            "username": "@me_lore",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52"
        },
        "content": "The maple syrup in Canada is not just a treat, it’s practically a lifestyle. 🍁🥞",
        "hashtags": ["#canada", "#maplesyrup", "#life"],
        "createdAt": "2025-08-24T12:45:00Z",
        "likes": 47,
        "comments": 5
    },
    {
        "id": 259,
        "author": {
            "id": 52,
            "name": "Lore Macclincy",
            "username": "@me_lore",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52"
        },
        "content": "If snow falls in August, does it still count as summer? Asking for a friend. ❄️🤔",
        "hashtags": ["#snow", "#canada", "#humor"],
        "createdAt": "2025-08-24T15:20:00Z",
        "likes": 43,
        "comments": 6
    },
    {
        "id": 260,
        "author": {
            "id": 52,
            "name": "Lore Macclincy",
            "username": "@me_lore",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/52"
        },
        "content": "Nothing beats a warm fireplace and a good book on a chilly Canadian evening. 🔥📖",
        "hashtags": ["#cozy", "#canada", "#reading"],
        "createdAt": "2025-08-24T18:00:00Z",
        "likes": 55,
        "comments": 8
    },
    {
        "id": 261,
        "author": {
            "id": 53,
            "name": "Bruno Silva",
            "username": "@bruno09",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/53"
        },
        "content": "Fui tentar cozinhar e quase liguei o bombeiro no lugar do fogão",
        "hashtags": ["#humor", "#cozinha", "#vidaReal"],
        "createdAt": "2025-08-25T08:00:00Z",
        "likes": 35,
        "comments": 4
    },
    {
        "id": 262,
        "author": {
            "id": 53,
            "name": "Bruno Silva",
            "username": "@bruno09",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/53"
        },
        "content": "Segunda-feira chegou e trouxe todos os meus e-mails indesejados para a festa",
        "hashtags": ["#trabalho", "#humor", "#segundaFeira"],
        "createdAt": "2025-08-25T10:30:00Z",
        "likes": 42,
        "comments": 5
    },
    {
        "id": 263,
        "author": {
            "id": 53,
            "name": "Bruno Silva",
            "username": "@bruno09",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/53"
        },
        "content": "Meu cachorro parece que entende tudo que eu digo, mas escolhe ignorar todas as ordens",
        "hashtags": ["#humor", "#vidaComPets", "#diversão"],
        "createdAt": "2025-08-25T12:45:00Z",
        "likes": 38,
        "comments": 6
    },
    {
        "id": 264,
        "author": {
            "id": 53,
            "name": "Bruno Silva",
            "username": "@bruno09",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/53"
        },
        "content": "Comecei uma dieta hoje e meu cérebro já está planejando a fuga da geladeira",
        "hashtags": ["#humor", "#dieta", "#vidaReal"],
        "createdAt": "2025-08-25T15:20:00Z",
        "likes": 47,
        "comments": 7
    },
    {
        "id": 265,
        "author": {
            "id": 53,
            "name": "Bruno Silva",
            "username": "@bruno09",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/53"
        },
        "content": "Se rir é mesmo o melhor remédio, eu estou praticamente curado de tudo",
        "hashtags": ["#humor", "#vidaReal", "#alegria"],
        "createdAt": "2025-08-25T18:00:00Z",
        "likes": 53,
        "comments": 9
    },
    {
        "id": 266,
        "author": {
            "id": 54,
            "name": "Bruna Gomes",
            "username": "@eu_bruna_gomes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/54"
        },
        "content": "Hoje acordei cedo… e me arrependi imediatamente",
        "hashtags": ["#humor", "#vidaReal", "#sono"],
        "createdAt": "2025-08-26T07:45:00Z",
        "likes": 36,
        "comments": 4
    },
    {
        "id": 267,
        "author": {
            "id": 54,
            "name": "Bruna Gomes",
            "sername": "@eu_bruna_gomes",
            "avatar": "hhttps://social-toolkit-gamma.vercel.app/api/avatar/id/54"
        },
        "content": "Tentei ser produtiva, mas meu sofá me fez uma proposta que não pude recusar",
        "hashtags": ["#humor", "#preguiça", "#vidaReal"],
        "createdAt": "2025-08-26T10:15:00Z",
        "likes": 42,
        "comments": 5
    },
    {
        "id": 268,
        "author": {
            "id": 54,
            "name": "Bruna Gomes",
            "username": "@eu_bruna_gomes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/54"
        },
        "content": "Meu computador travou de novo. Acho que ele está de greve silenciosa",
        "hashtags": ["#humor", "#tecnologia", "#vidaReal"],
        "createdAt": "2025-08-26T12:30:00Z",
        "likes": 39,
        "comments": 6
    },
    {
        "id": 269,
        "author": {
            "id": 54,
            "name": "Bruna Gomes",
            "username": "@eu_bruna_gomes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/54"
        },
        "content": "Fui tentar organizar minha vida… e encontrei um monte de tarefas antigas que eu nem lembrava",
        "hashtags": ["#humor", "#desorganização", "#vidaReal"],
        "createdAt": "2025-08-26T15:00:00Z",
        "likes": 44,
        "comments": 7
    },
    {
        "id": 270,
        "author": {
            "id": 54,
            "name": "Bruna Gomes",
            "username": "@eu_bruna_gomes",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/54"
        },
        "content": "Se rir é saudável, então estou vivendo como uma atleta olímpica",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-08-26T18:20:00Z",
        "likes": 50,
        "comments": 8
    },
    {
        "id": 271,
        "author": {
            "id": 55,
            "name": "Vanda Junqueira",
            "username": "@vanda_junqueira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55"
        },
        "content": "Acordei cedo pra me exercitar… e acabei me exercitando só para desligar o despertador",
        "hashtags": ["#humor", "#preguiça", "#vidaReal"],
        "createdAt": "2025-08-27T07:30:00Z",
        "likes": 37,
        "comments": 5
    },
    {
        "id": 272,
        "author": {
            "id": 55,
            "name": "Vanda Junqueira",
            "username": "@vanda_junqueira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55"
        },
        "content": "Segunda-feira chegou e trouxe aquele e-mail que ninguém quer ler",
        "hashtags": ["#humor", "#trabalho", "#vidaReal"],
        "createdAt": "2025-08-27T09:45:00Z",
        "likes": 41,
        "comments": 6
    },
    {
        "id": 273,
        "author": {
            "id": 55,
            "name": "Vanda Junqueira",
            "username": "@vanda_junqueira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55"
        },
        "content": "Meu gato decidiu sentar no teclado e agora meu relatório tem mais histórias que dados",
        "hashtags": ["#humor", "#gatos", "#vidaReal"],
        "createdAt": "2025-08-27T12:15:00Z",
        "likes": 45,
        "comments": 7
    },
    {
        "id": 274,
        "author": {
            "id": 55,
            "name": "Vanda Junqueira",
            "username": "@vanda_junqueira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55"
        },
        "content": "Decidi cozinhar hoje… e agora estou negociando com o micro-ondas",
        "hashtags": ["#humor", "#cozinha", "#vidaReal"],
        "createdAt": "2025-08-27T14:40:00Z",
        "likes": 42,
        "comments": 5
    },
    {
        "id": 275,
        "author": {
            "id": 55,
            "name": "Vanda Junqueira",
            "username": "@vanda_junqueira",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/55"
        },
        "content": "Se rir fosse exercício físico, eu estaria pronta para a maratona",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-08-27T17:20:00Z",
        "likes": 48,
        "comments": 8
    },
    {
        "id": 276,
        "author": {
            "id": 56,
            "name": "Mariana Santino",
            "username": "@mah_santino",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56"
        },
        "content": "Acordei motivada… até olhar a lista de tarefas e perceber que meu sofá é mais convincente",
        "hashtags": ["#humor", "#preguiça", "#vidaReal"],
        "createdAt": "2025-08-28T08:15:00Z",
        "likes": 39,
        "comments": 5
    },
    {
        "id": 277,
        "author": {
            "id": 56,
            "name": "Mariana Santino",
            "username": "@mah_santino",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56"
        },
        "content": "Segunda-feira chegou trazendo reuniões e café frio, a combinação perfeita",
        "hashtags": ["#humor", "#trabalho", "#segundaFeira"],
        "createdAt": "2025-08-28T10:40:00Z",
        "likes": 44,
        "comments": 6
    },
    {
        "id": 278,
        "author": {
            "id": 56,
            "name": "Mariana Santino",
            "username": "@mah_santino",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56"
        },
        "content": "Meu cachorro resolveu me ensinar a importância da soneca diária",
        "hashtags": ["#humor", "#pets", "#vidaReal"],
        "createdAt": "2025-08-28T13:05:00Z",
        "likes": 41,
        "comments": 5
    },
    {
        "id": 279,
        "author": {
            "id": 56,
            "name": "Mariana Santino",
            "username": "@mah_santino",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56"
        },
        "content": "Decidi fazer dieta… mas a geladeira começou a me fazer propostas tentadoras",
        "hashtags": ["#humor", "#dieta", "#vidaReal"],
        "createdAt": "2025-08-28T15:30:00Z",
        "likes": 46,
        "comments": 7
    },
    {
        "id": 280,
        "author": {
            "id": 56,
            "name": "Mariana Santino",
            "username": "@mah_santino",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/56"
        },
        "content": "Se rir fosse esporte, eu já estaria treinando para as olimpíadas",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-08-28T18:00:00Z",
        "likes": 50,
        "comments": 8
    },
    {
        "id": 281,
        "author": {
            "id": 57,
            "name": "Madalena Buarque",
            "username": "@a_madah",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57"
        },
        "content": "Acordei pensando em ser produtiva… e acabei negociando mais cinco minutos de sono",
        "hashtags": ["#humor", "#preguiça", "#vidaReal"],
        "createdAt": "2025-08-29T07:50:00Z",
        "likes": 38,
        "comments": 5
    },
    {
        "id": 282,
        "author": {
            "id": 57,
            "name": "Madalena Buarque",
            "username": "@a_madah",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57"
        },
        "content": "Segunda-feira: quando o café é mais convincente que qualquer plano de vida",
        "hashtags": ["#humor", "#trabalho", "#café"],
        "createdAt": "2025-08-29T10:20:00Z",
        "likes": 42,
        "comments": 6
    },
    {
        "id": 283,
        "author": {
            "id": 57,
            "name": "Madalena Buarque",
            "username": "@a_madah",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57"
        },
        "content": "Meu gato acha que eu sou empregado dele e não o contrário",
        "hashtags": ["#humor", "#pets", "#vidaReal"],
        "createdAt": "2025-08-29T12:45:00Z",
        "likes": 44,
        "comments": 7
    },
    {
        "id": 284,
        "author": {
            "id": 57,
            "name": "Madalena Buarque",
            "username": "@a_madah",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57"
        },
        "content": "Tentei cozinhar hoje e o resultado quase me convenceu a pedir delivery para sempre",
        "hashtags": ["#humor", "#cozinha", "#vidaReal"],
        "createdAt": "2025-08-29T15:10:00Z",
        "likes": 41,
        "comments": 6
    },
    {
        "id": 285,
        "author": {
            "id": 57,
            "name": "Madalena Buarque",
            "username": "@a_madah",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/57"
        },
        "content": "Se rir fosse um esporte, minha medalha de ouro já estaria garantida",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-08-29T17:45:00Z",
        "likes": 47,
        "comments": 8
    },
    {
        "id": 286,
        "author": {
            "id": 58,
            "name": "Isabella Fliorine",
            "username": "@isah_7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58"
        },
        "content": "Tentei começar a dieta hoje… mas meu coração e minha geladeira não entraram em acordo",
        "hashtags": ["#humor", "#dieta", "#vidaReal"],
        "createdAt": "2025-08-30T08:10:00Z",
        "likes": 39,
        "comments": 5
    },
    {
        "id": 287,
        "author": {
            "id": 58,
            "name": "Isabella Fliorine",
            "username": "@isah_7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58"
        },
        "content": "Meu café da manhã estava tão bom que até considerei uma promoção para continuar dormindo",
        "hashtags": ["#humor", "#café", "#vidaReal"],
        "createdAt": "2025-08-30T10:30:00Z",
        "likes": 43,
        "comments": 6
    },
    {
        "id": 288,
        "author": {
            "id": 58,
            "name": "Isabella Fliorine",
            "username": "@isah_7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58"
        },
        "content": "Decidi limpar a casa e acabei limpando só a vontade de trabalhar",
        "hashtags": ["#humor", "#vidaReal", "#preguiça"],
        "createdAt": "2025-08-30T12:55:00Z",
        "likes": 41,
        "comments": 5
    },
    {
        "id": 289,
        "author": {
            "id": 58,
            "name": "Isabella Fliorine",
            "username": "@isah_7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58"
        },
        "content": "Meu cachorro parece mais disciplinado que eu… e isso diz muito sobre minha vida",
        "hashtags": ["#humor", "#pets", "#vidaReal"],
        "createdAt": "2025-08-30T15:20:00Z",
        "likes": 44,
        "comments": 6
    },
    {
        "id": 290,
        "author": {
            "id": 58,
            "name": "Isabella Fliorine",
            "username": "@isah_7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/58"
        },
        "content": "Se rir fosse trabalho, hoje eu estaria de férias permanentes",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-08-30T17:50:00Z",
        "likes": 48,
        "comments": 7
    },
    {
        "id": 291,
        "author": {
            "id": 59,
            "name": "Antônio Carlos Magalhâes",
            "username": "@antonio_carlos8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/59"
        },
        "content": "Passei o dia tentando calcular estruturas… e acabei calculando só quantas xícaras de café eu precisava",
        "hashtags": ["#humor", "#engenharia", "#vidaReal"],
        "createdAt": "2025-08-31T08:15:00Z",
        "likes": 41,
        "comments": 5
    },
    {
        "id": 292,
        "author": {
            "id": 59,
            "name": "Antônio Carlos Magalhâes",
            "username": "@antonio_carlos8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/59"
        },
        "content": "Engenharia é maravilhosa, até você perceber que sua planta está de cabeça para baixo",
        "hashtags": ["#humor", "#engenharia", "#vidaReal"],
        "createdAt": "2025-08-31T10:40:00Z",
        "likes": 45,
        "comments": 6
    },
    {
        "id": 293,
        "author": {
            "id": 59,
            "name": "Antônio Carlos Magalhâes",
            "username": "@antonio_carlos8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/59"
        },
        "content": "Meu capacete me protege, mas não protege das minhas próprias ideias mirabolantes",
        "hashtags": ["#humor", "#engenharia", "#vidaReal"],
        "createdAt": "2025-08-31T12:55:00Z",
        "likes": 43,
        "comments": 5
    },
    {
        "id": 294,
        "author": {
            "id": 59,
            "name": "Antônio Carlos Magalhâes",
            "username": "@antonio_carlos8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/59"
        },
        "content": "Tentei organizar o canteiro de obras e organizei apenas minha paciência",
        "hashtags": ["#humor", "#engenharia", "#vidaReal"],
        "createdAt": "2025-08-31T15:20:00Z",
        "likes": 46,
        "comments": 7
    },
    {
        "id": 295,
        "author": {
            "id": 59,
            "name": "Antônio Carlos Magalhâes",
            "username": "@antonio_carlos8",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/59"
        },
        "content": "Se rir fosse concreto, meu prédio já estaria de pé há anos",
        "hashtags": ["#humor", "#engenharia", "#alegria"],
        "createdAt": "2025-08-31T17:50:00Z",
        "likes": 49,
        "comments": 8
    },
    {
        "id": 296,
        "author": {
            "id": 60,
            "name": "Júlia Rodrigues",
            "username": "@juh_rodrigues7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60"
        },
        "content": "Passei o dia tirando fotos… e percebi que minha própria vida precisa de filtro",
        "hashtags": ["#humor", "#fotografia", "#vidaReal"],
        "createdAt": "2025-09-01T08:30:00Z",
        "likes": 38,
        "comments": 5
    },
    {
        "id": 297,
        "author": {
            "id": 60,
            "name": "Júlia Rodrigues",
            "username": "@juh_rodrigues7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60"
        },
        "content": "Tentei organizar minhas redes sociais, mas minhas notificações têm vida própria",
        "hashtags": ["#humor", "#socialMedia", "#vidaReal"],
        "createdAt": "2025-09-01T10:50:00Z",
        "likes": 42,
        "comments": 6
    },
    {
        "id": 298,
        "author": {
            "id": 60,
            "name": "Júlia Rodrigues",
            "username": "@juh_rodrigues7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60"
        },
        "content": "Meu cachorro se tornou meu assistente de fotos… e o mais bagunceiro",
        "hashtags": ["#humor", "#fotografia", "#pets"],
        "createdAt": "2025-09-01T13:15:00Z",
        "likes": 40,
        "comments": 5
    },
    {
        "id": 299,
        "author": {
            "id": 60,
            "name": "Júlia Rodrigues",
            "username": "@juh_rodrigues7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60"
        },
        "content": "Decidi criar um novo projeto de fotos… mas a inspiração decidiu tirar férias",
        "hashtags": ["#humor", "#fotografia", "#vidaReal"],
        "createdAt": "2025-09-01T15:40:00Z",
        "likes": 44,
        "comments": 7
    },
    {
        "id": 300,
        "author": {
            "id": 60,
            "name": "Júlia Rodrigues",
            "username": "@juh_rodrigues7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/60"
        },
        "content": "Se rir fosse arte, eu já teria uma galeria inteira",
        "hashtags": ["#humor", "#alegria", "#vidaReal"],
        "createdAt": "2025-09-01T18:10:00Z",
        "likes": 48,
        "comments": 8
    },
    {
    "id": 301,
    "author": {
        "id": 61,
        "name": "Priscila Campos",
        "username": "@priscila_campos",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61"
    },
    "content": "Acabei de descobrir que meu celular tinha um modo 'não perturbe' ativado por 3 anos. Eu achando que era falta de amigos 😂 #DeusMeLivra #SocialUtils",
    "hashtags": ["#DeusMeLivra #SocialUtils #solitaria"],
    "createAt": "2026-03-30T10:23:45Z",
    "likes": 234,
    "comments": 45
    },
    {
        "id": 302,
        "author": {
            "id": 61,
            "name": "Priscila Campos",
            "username": "@priscila_campos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61"
        },
        "content": "Tentei fazer academia hoje. Meu corpo disse 'não' e minha alma disse 'também não'. Ficou para 2027 🤷‍♀️ #AnoQueVem #GymFail",
        "hashtags": ["#AnoQueVem #GymFail #preguicacriativa"],
        "createAt": "2026-03-29T18:45:12Z",
        "likes": 567,
        "comments": 89
    },
    {
        "id": 303,
        "author": {
            "id": 61,
            "name": "Priscila Campos",
            "username": "@priscila_campos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61"
        },
        "content": "Meu superpoder é fazer miojo e esquecer na mesa até esfriar. 5 minutos de preparo, 3 horas de luto pelo miojo perdido 🍜😭 #TalentosRaros #MiojoPerdido",
        "hashtags": ["#TalentosRaros #MiojoPerdido #tdahgourmet"],
        "createAt": "2026-03-28T22:10:33Z",
        "likes": 892,
        "comments": 123
    },
    {
        "id": 304,
        "author": {
            "id": 61,
            "name": "Priscila Campos",
            "username": "@priscila_campos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61"
        },
        "content": "A IA disse que minha foto parece que fui gerada aleatoriamente. Até o computador me chamou de genérica 😤 #AvataresAleatorios #SocialUtils #InsuportavelmenteUnica",
        "hashtags": ["#AvataresAleatorios #SocialUtils #InsuportavelmenteUnica"],
        "createAt": "2026-03-27T14:15:22Z",
        "likes": 123,
        "comments": 201
    },
    {
        "id": 305,
        "author": {
            "id": 61,
            "name": "Priscila Campos",
            "username": "@priscila_campos",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/61"
        },
        "content": "Juro que meu perfil falso tem mais seguidores que meu perfil real. Talvez eu devesse me tornar a minha própria versão falsa? 🤡 #IdentidadeCrise #PerfilFalso",
        "hashtags": ["#IdentidadeCrise #PerfilFalso #sociedademoderna"],
        "createAt": "2026-03-26T09:30:05Z",
        "likes": 343,
        "comments": 456
    },
    {
        "id": 306,
        "author": {
            "id": 62,
            "name": "Mário Olinda",
            "username": "@mario_olinda7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62"
        },
        "content": "Meu filme foi rejeitado no festival porque \"a narrativa não seguia a estrutura tradicional de três atos\". Meu filme era sobre um cara que perdeu o controle remoto. A estrutura era: 1) procurar, 2) achar, 3) era a bateria. Obra-prima incompreendida. 🎬📺 #CineastaIncompreendido #ArteContemporanea",
        "hashtags": ["#CineastaIncompreendido", "#ArteContemporanea", "#FestivalDeCinema"],
        "createAt": "2026-03-27T14:15:22Z",
        "likes": 287,
        "comments": 89
    },
    {
        "id": 307,
        "author": {
            "id": 62,
            "name": "Mário Olinda",
            "username": "@mario_olinda7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62"
        },
        "content": "Minha mãe finalmente assistiu meu curta-metragem experimental de 45 minutos sem diálogos, só com planos sequência de uma lâmpada piscando. Ela disse: \"filho, tá com problema na fiação? Quer que eu chame um eletricista?\" Pois é. O espectador médio ainda não tá preparado. 🎥💡 #CinemaDeAutor #FiaçãoAlegórica",
        "hashtags": ["#CinemaDeAutor", "#FiaçãoAlegórica", "#MaeSempreApoia"],
        "createAt": "2026-03-27T19:45:03Z",
        "likes": 512,
        "comments": 134
    },
    {
        "id": 308,
        "author": {
            "id": 62,
            "name": "Mário Olinda",
            "username": "@mario_olinda7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62"
        },
        "content": "Tô desenvolvendo um novo projeto: um documentário onde eu entrevisto meus próprios amigos perguntando se eles realmente gostam dos meus filmes. Título provisório: 'Mentiras que Sustentam uma Carreira'. Previsão de lançamento: depois da terapia. 🎙️🎬 #CinemaVerite #AmigosMentem",
        "hashtags": ["#CinemaVerite", "#AmigosMentem", "#DocumentarioBrasileiro"],
        "createAt": "2026-03-28T10:20:45Z",
        "likes": 678,
        "comments": 201
    },
    {
        "id": 309,
        "author": {
            "id": 62,
            "name": "Mário Olinda",
            "username": "@mario_olinda7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62"
        },
        "content": "Ator me mandou mensagem perguntando se podia improvisar uma fala no próximo filme. Eu disse: \"claro, mas só se for em latim e rimando com 'cinematográfico'.\" Ele nunca mais respondeu. Perdi outro. Tá difícil achar elenco comprometido com a visão artística. 🎭📽️ #DiretorExigente #ImprovisoNemSempre",
        "hashtags": ["#DiretorExigente", "#ImprovisoNemSempre", "#CinemaBrasileiro"],
        "createAt": "2026-03-28T18:12:30Z",
        "likes": 423,
        "comments": 67
    },
    {
        "id": 310,
        "author": {
            "id": 62,
            "name": "Mário Olinda",
            "username": "@mario_olinda7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/62"
        },
        "content": "Sabe o que é mais difícil que dirigir um longa-metragem com orçamento de R$ 5 mil e uma única bateria de câmera? Explicar pro meu pai que 'cineasta' é uma profissão de verdade. Ele ainda pergunta se eu vou 'arrumar um emprego de verdade' ou se vou continuar 'filmando gente triste'. 🎞️💀 #CineastaBrasileiro #FamiliaPergunta",
        "hashtags": ["#CineastaBrasileiro", "#FamiliaPergunta", "#ProfissaoCineasta"],
        "createAt": "2026-03-29T09:05:17Z",
        "likes": 789,
        "comments": 312
    },
    {
        "id": 311,
        "author": {
            "id": 63,
            "name": "César Filho",
            "username": "@filho_cesar3",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63"
        },
        "content": "Cliente: \"pode vir fotografar meu aniversário, mas vai ser rápido, só 4 horas\"\nEu: \"rápido?\"\nCliente: \"é, só 4 horinhas\"\nEu, fotógrafo: *já mentalizando que vou perder 3 casamentos e um ensaio externo* 📸💀 #FotografoProfissional #TempoRelativo",
        "hashtags": ["#FotografoProfissional", "#TempoRelativo", "#MercadoDaFotografia"],
        "createAt": "2026-03-29T14:30:12Z",
        "likes": 567,
        "comments": 143
    },
    {
        "id": 312,
        "author": {
            "id": 63,
            "name": "César Filho",
            "username": "@filho_cesar3",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63"
        },
        "content": "Já perdi as contas de quantas vezes me perguntaram: \"mas você não tem uma câmera boa? tira uma foto minha aí com o celular também né\"\n\nAmigo, minha câmera pesa 2kg, tem lente que custa um carro popular e eu carrego um tripé só pra provar que sofro com estilo. Celular é pra vocês, eu sou da tropa do viewfinder. 🔭📱 #NaoSouFotografoDeCelular #EquipamentoPesa",
        "hashtags": ["#NaoSouFotografoDeCelular", "#EquipamentoPesa", "#FotografiaProfissional"],
        "createAt": "2026-03-29T20:15:45Z",
        "likes": 892,
        "comments": 201
    },
    {
        "id": 313,
        "author": {
            "id": 63,
            "name": "César Filho",
            "username": "@filho_cesar3",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63"
        },
        "content": "Fotografei um casamento hoje. No meio da cerimônia, o noivo me olhou e disse: \"César, tira uma foto minha com a minha mãe, mas me deixa mais alto.\"\n\nIrmão, eu sou fotógrafo, não milagreiro. Seu pai já é baixinho, a genética não é culpa do raw. 📸💔 #Casamento #MilagreNaoFaco #PhotoshopTemLimite",
        "hashtags": ["#Casamento", "#MilagreNaoFaco", "#PhotoshopTemLimite"],
        "createAt": "2026-03-30T11:45:30Z",
        "likes": 734,
        "comments": 178
    },
    {
        "id": 314,
        "author": {
            "id": 63,
            "name": "César Filho",
            "username": "@filho_cesar3",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63"
        },
        "content": "Minha mãe agora tá usando as fotos que eu tirei no Natal como se fossem dela no Instagram. Ela colocou uma minha favorita e escreveu: \"olha essa foto que EU tirei, não é que eu tenho talento?\"\n\nMãe, o tripé era meu, a câmera era minha, a edição foi minha. Mas tá bom. Eu autorizo. Pelo menos ela parou de falar que eu devia fazer concurso público. 📸👩👦 #FotografoDeFamilia #CreditoNaoExiste",
        "hashtags": ["#FotografoDeFamilia", "#CreditoNaoExiste", "#MaeTalento"],
        "createAt": "2026-03-30T17:20:08Z",
        "likes": 1023,
        "comments": 256
    },
    {
        "id": 315,
        "author": {
            "id": 63,
            "name": "César Filho",
            "username": "@filho_cesar3",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/63"
        },
        "content": "Quando comecei na fotografia, achava que meu maior desafio seria dominar a exposição, composição e luz natural.\n\nAnos depois, descobri que o verdadeiro desafio é explicar pra cliente que não, eu não vou \"dar uma leve aumentada no olho\" porque \"ela ficou com cara de sono\" no ensaio. O olho é seu, moça. Eu só registro. 👁️📸 #FotografoProfissional #EdicaoNaoEDeus",
        "hashtags": ["#FotografoProfissional", "#EdicaoNaoEDeus", "#ClienteSempreTemRazao"],
        "createAt": "2026-03-31T08:55:22Z",
        "likes": 645,
        "comments": 134
    },
    {
        "id": 316,
        "author": {
            "id": 64,
            "name": "Otávio Rogério",
            "username": "@roh_otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64"
        },
        "content": "Cliente: \"posso pagar com um pix parcelado?\"\nEu: \"parcelado?\"\nCliente: \"é, 12x sem juros\"\nEu: \"pix não parcela, amigo. Nem minha paciência.\" 💸🤡 #ConsultorDeVendas #PixNaoParcela",
        "hashtags": ["#ConsultorDeVendas", "#PixNaoParcela", "#Vendas"],
        "createAt": "2026-03-30T10:15:33Z",
        "likes": 412,
        "comments": 89
    },
    {
        "id": 317,
        "author": {
            "id": 64,
            "name": "Otávio Rogério",
            "username": "@roh_otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64"
        },
        "content": "Meu maior talento é transformar \"vou pensar\" em \"cadê o link de pagamento?\" em menos de 24h. Se isso não é arte, não sei o que é. 🎯💼 #Fechamento #ConsultorDeVendas",
        "hashtags": ["#Fechamento", "#ConsultorDeVendas", "#VendasQueConvencem"],
        "createAt": "2026-03-30T15:40:12Z",
        "likes": 587,
        "comments": 67
    },
    {
        "id": 318,
        "author": {
            "id": 64,
            "name": "Otávio Rogério",
            "username": "@roh_otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64"
        },
        "content": "Cliente pediu desconto. Dei. Depois pediu mais. Dei. Depois perguntou se podia pagar daqui um mês. Eu: \"quer o produto grátis e ainda entrego em casa com um café?\" Quase aceitou. ☕📉 #VendedorPaciente #Consultoria",
        "hashtags": ["#VendedorPaciente", "#Consultoria", "#Limites"],
        "createAt": "2026-03-30T20:55:47Z",
        "likes": 723,
        "comments": 156
    },
    {
        "id": 319,
        "author": {
            "id": 64,
            "name": "Otávio Rogério",
            "username": "@roh_otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64"
        },
        "content": "Vender é fácil. Difícil é ouvir \"depois eu te aviso\" sabendo que o depois nunca chega. Já estou até preparando o velório dessa venda. ⚰️📞 #Vendas #DepoisEuTeAviso",
        "hashtags": ["#Vendas", "#DepoisEuTeAviso", "#ConsultorDeVendas"],
        "createAt": "2026-03-31T09:10:05Z",
        "likes": 489,
        "comments": 102
    },
    {
        "id": 320,
        "author": {
            "id": 64,
            "name": "Otávio Rogério",
            "username": "@roh_otavio",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/64"
        },
        "content": "Meu segredo? Escuto o cliente, dou soluções, fecho a venda. O segredo do cliente? Fala que vai pensar, some duas semanas e volta perguntando se o preço ainda é o mesmo. Sempre é, amigo. Sempre é. 🤝💰 #VendasQueFecham #Consultoria",
        "hashtags": ["#VendasQueFecham", "#Consultoria", "#PrecoNaoMuda"],
        "createAt": "2026-03-31T14:25:18Z",
        "likes": 634,
        "comments": 78
    },
    {
        "id": 321,
        "author": {
            "id": 65,
            "name": "Herry Willians",
            "username": "@herry_willians",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65"
        },
        "content": "British weather: 4 seasons in one day. British business: 4 meetings in one hour. I'm not complaining, though. Complaining would be un-British. ☕🌧️🇬🇧 #BritishBusiness #LondonEntrepreneur",
        "hashtags": ["#BritishBusiness", "#LondonEntrepreneur", "#WeatherFirst"],
        "createAt": "2026-03-30T09:45:22Z",
        "likes": 456,
        "comments": 78
    },
    {
        "id": 322,
        "author": {
            "id": 65,
            "name": "Herry Willians",
            "username": "@herry_willians",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65"
        },
        "content": "Investor asked me: \"what's your 5-year plan?\"\nI said: \"survive British taxes and maybe buy a second kettle for the office.\"\nHe didn't invest. I don't think he understood the vision. 🫖💼 #EntrepreneurLife #UKBusiness",
        "hashtags": ["#EntrepreneurLife", "#UKBusiness", "#KettleVision"],
        "createAt": "2026-03-30T14:20:10Z",
        "likes": 623,
        "comments": 112
    },
    {
        "id": 323,
        "author": {
            "id": 65,
            "name": "Herry Willians",
            "username": "@herry_willians",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65"
        },
        "content": "In England, we don't say \"I'm stressed.\" We say \"I could do with a cuppa,\" and then proceed to drink 7 cups of tea while ignoring all problems. Business strategy, really. ☕👔 #BritishProblems #TeaOverEverything",
        "hashtags": ["#BritishProblems", "#TeaOverEverything", "#BusinessStrategy"],
        "createAt": "2026-03-30T18:55:35Z",
        "likes": 891,
        "comments": 203
    },
    {
        "id": 324,
        "author": {
            "id": 65,
            "name": "Herry Willians",
            "username": "@herry_willians",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65"
        },
        "content": "My business partner suggested we have a \"hustle culture\" meeting at 6 AM. I suggested we have a \"let's respect our circadian rhythm\" meeting at 10 AM with biscuits. Guess who won? The biscuits. Always the biscuits. 🍪⏰ #Entrepreneur #UKBusiness",
        "hashtags": ["#Entrepreneur", "#UKBusiness", "#BiscuitsOverHustle"],
        "createAt": "2026-03-31T08:30:47Z",
        "likes": 745,
        "comments": 167
    },
    {
        "id": 325,
        "author": {
            "id": 65,
            "name": "Herry Willians",
            "username": "@herry_willians",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/65"
        },
        "content": "Someone said \"entrepreneurs don't sleep.\" I said \"entrepreneurs in England take proper tea breaks, have a lie-in on Sundays, and still build successful businesses.\" They looked confused. I offered them tea. Problem solved. 🇬🇧💤 #BritishEntrepreneur #WorkLifeBalance",
        "hashtags": ["#BritishEntrepreneur", "#WorkLifeBalance", "#TeaFirst"],
        "createAt": "2026-03-31T15:40:02Z",
        "likes": 678,
        "comments": 145
    },
    {
        "id": 326,
        "author": {
            "id": 66,
            "name": "Ricardo Santos",
            "username": "@santos_ricardo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66"
        },
        "content": "Acordei inspirado, tomei um café, fiz um planejamento impecável. Aí o dia resolveu acontecer e atrapalhou tudo. 🥴☕ #Planejamento #DiaReal",
        "hashtags": ["#Planejamento", "#DiaReal", "#VidaQueSegue"],
        "createAt": "2026-03-31T08:15:33Z",
        "likes": 345,
        "comments": 67
    },
    {
        "id": 327,
        "author": {
            "id": 66,
            "name": "Ricardo Santos",
            "username": "@santos_ricardo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66"
        },
        "content": "Não sei quem precisa ouvir isso, mas: não, você não vai ficar rico trabalhando 18 horas por dia. Você só vai ficar cansado e com a cara no teclado. Durma. 💤😴 #DicaNaoSolicitada #SaudeMental",
        "hashtags": ["#DicaNaoSolicitada", "#SaudeMental", "#Equilibrio"],
        "createAt": "2026-03-31T12:40:22Z",
        "likes": 892,
        "comments": 134
    },
    {
        "id": 328,
        "author": {
            "id": 66,
            "name": "Ricardo Santos",
            "username": "@santos_ricardo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66"
        },
        "content": "Meu maior talento é falar que vou resolver algo em \"5 minutinhos\" e reaparecer só depois de 3 dias, como se nada tivesse acontecido. Consistência, chama. ⏳🔥 #PrazoElastico #Compromisso",
        "hashtags": ["#PrazoElastico", "#Compromisso", "#AutoIronia"],
        "createAt": "2026-03-31T17:55:47Z",
        "likes": 523,
        "comments": 89
    },
    {
        "id": 329,
        "author": {
            "id": 66,
            "name": "Ricardo Santos",
            "username": "@santos_ricardo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66"
        },
        "content": "Gente que começa segunda-feira com \"bora com tudo\" merece respeito. Eu começo com \"bora com calma que a semana é longa\" e tô vivo até hoje. 🐢✨ #SegundaFeira #RitmoProprio",
        "hashtags": ["#SegundaFeira", "#RitmoProprio", "#Calma"],
        "createAt": "2026-03-31T19:20:12Z",
        "likes": 678,
        "comments": 145
    },
    {
        "id": 330,
        "author": {
            "id": 66,
            "name": "Ricardo Santos",
            "username": "@santos_ricardo",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/66"
        },
        "content": "Se aprender com os erros fosse moeda, eu já tinha comprado uma ilha. Mas não é. Então sigo errando e aprendendo. Quem sabe um dia eu compro pelo menos um pastel. 🥟💰 #Aprendizado #ErrosEAcertos",
        "hashtags": ["#Aprendizado", "#ErrosEAcertos", "#PastelSempre"],
        "createAt": "2026-03-31T21:05:05Z",
        "likes": 734,
        "comments": 198
    },
    {
        "id": 331,
        "author": {
            "id": 67,
            "name": "Mauricio Sousa",
            "username": "@mauricio23",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67"
        },
        "content": "Minha mãe ainda acha que meu trabalho é \"ficar no computador o dia todo\". Expliquei que sou analista de dados. Ela disse: \"então você fica no computador o dia todo analisando?\" Desisti. 📊💻 #AnalistaDeDados #MaeSempreSabe",
        "hashtags": ["#AnalistaDeDados", "#MaeSempreSabe", "#TrabalhoInvisivel"],
        "createAt": "2026-03-31T10:30:15Z",
        "likes": 456,
        "comments": 89
    },
    {
        "id": 332,
        "author": {
            "id": 67,
            "name": "Mauricio Sousa",
            "username": "@mauricio23",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67"
        },
        "content": "Planilha bem feita é que nem namoro: tem que ter compromisso, atenção aos detalhes e, se der erro, ninguém dorme direito. 📉❤️ #PlanilhaVida #DadosSaoAmor",
        "hashtags": ["#PlanilhaVida", "#DadosSaoAmor", "#AnaliseDeDados"],
        "createAt": "2026-03-31T14:45:33Z",
        "likes": 567,
        "comments": 78
    },
    {
        "id": 333,
        "author": {
            "id": 67,
            "name": "Mauricio Sousa",
            "username": "@mauricio23",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67"
        },
        "content": "Colega: \"seu gráfico ficou lindo\"\nEu: \"obrigado, passei 3 horas escolhendo as cores\"\nColega: \"mas os dados estão certos?\"\nEu: \"...\"\nAlguém tem o arquivo original? 🎨📊 #Prioridades #AnalistaDeDados",
        "hashtags": ["#Prioridades", "#AnalistaDeDados", "#GraficosPerfeitos"],
        "createAt": "2026-03-31T16:20:47Z",
        "likes": 823,
        "comments": 156
    },
    {
        "id": 334,
        "author": {
            "id": 67,
            "name": "Mauricio Sousa",
            "username": "@mauricio23",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67"
        },
        "content": "Me pediram uma análise \"simples e rápida\". Já são 6 horas, 4 cafés e 3 planilhas abertas. Tô quase colocando no currículo: especialista em transformar \"simples\" em \"complicado mas bonito\". ☕📈 #NadaESimples #AnaliseDeDados",
        "hashtags": ["#NadaESimples", "#AnaliseDeDados", "#CafeSalva"],
        "createAt": "2026-03-31T18:55:22Z",
        "likes": 712,
        "comments": 134
    },
    {
        "id": 335,
        "author": {
            "id": 67,
            "name": "Mauricio Sousa",
            "username": "@mauricio23",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/67"
        },
        "content": "Aprendi que na vida existem dois tipos de pessoas: as que salvam o arquivo a cada 5 minutos e as que nunca perderam um trabalho inteiro por queda de energia. Eu sou do primeiro time. Traumas. 💾⚡ #CtrlS #VidaDeAnalista",
        "hashtags": ["#CtrlS", "#VidaDeAnalista", "#TraumaDigital"],
        "createAt": "2026-03-31T20:40:12Z",
        "likes": 945,
        "comments": 201
    },
    {
        "id": 336,
        "author": {
            "id": 68,
            "name": "Amelia Olivia",
            "username": "@me_amelia7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68"
        },
        "content": "My British superpower: saying \"sorry\" so many times that I once apologized to a mannequin for bumping into it. It didn't accept my apology. Still haunts me. 👗🙏 #BritishProblems #SorryNotSorry",
        "hashtags": ["#BritishProblems", "#SorryNotSorry", "#JustBritishThings"],
        "createAt": "2026-04-01T09:15:22Z",
        "likes": 678,
        "comments": 145
    },
    {
        "id": 337,
        "author": {
            "id": 68,
            "name": "Amelia Olivia",
            "username": "@me_amelia7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68"
        },
        "content": "Someone said \"let's grab lunch at 12:30.\" I arrived at 12:28 and waited outside until exactly 12:30 because arriving early is suspicious and arriving late is illegal. British timing. ⏰🇬🇧 #Punctuality #BritishCulture",
        "hashtags": ["#Punctuality", "#BritishCulture", "#TimeManagement"],
        "createAt": "2026-04-01T12:45:33Z",
        "likes": 823,
        "comments": 189
    },
    {
        "id": 338,
        "author": {
            "id": 68,
            "name": "Amelia Olivia",
            "username": "@me_amelia7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68"
        },
        "content": "The weather forecast said \"light drizzle.\" I opened my umbrella and was immediately lifted off the ground like Mary Poppins. This country is a comedy and I'm just living in it. 🌂💨 #BritishWeather #LightDrizzleLies",
        "hashtags": ["#BritishWeather", "#LightDrizzleLies", "#MaryPoppinsMode"],
        "createAt": "2026-04-01T15:30:47Z",
        "likes": 945,
        "comments": 234
    },
    {
        "id": 339,
        "author": {
            "id": 68,
            "name": "Amelia Olivia",
            "username": "@me_amelia7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68"
        },
        "content": "Had a conversation with a stranger at the bus stop. We complained about the weather, the bus being late, and the price of tea. Then we said goodbye and will never speak again. Beautiful British friendship. ☕🚌 #BritishEtiquette #BusStopBonding",
        "hashtags": ["#BritishEtiquette", "#BusStopBonding", "#StrangersForLife"],
        "createAt": "2026-04-01T17:55:12Z",
        "likes": 789,
        "comments": 167
    },
    {
        "id": 340,
        "author": {
            "id": 68,
            "name": "Amelia Olivia",
            "username": "@me_amelia7",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/68"
        },
        "content": "I told my mum I'm moving to Brazil. She said: \"but darling, do they have proper tea there?\" Mum, they have coffee. I'll survive. Probably. 🇧🇷☕🇬🇧 #MovingAbroad #TeaEmergency #BrazilBound",
        "hashtags": ["#MovingAbroad", "#TeaEmergency", "#BrazilBound"],
        "createAt": "2026-04-01T20:10:05Z",
        "likes": 1012,
        "comments": 278
    },
    {
        "id": 341,
        "author": {
            "id": 69,
            "name": "João Pedro Silva",
            "username": "@joaopedro_silva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69"
        },
        "content": "Fui na academia hoje. Fiz 10 minutos de esteira, tirei foto pro story e fui embora. Pelo menos fui. Já é alguma coisa. 🏃💪 #Foco #Academia #StoryPrimeiro",
        "hashtags": ["#Foco", "#Academia", "#StoryPrimeiro"],
        "createAt": "2026-04-01T10:20:15Z",
        "likes": 567,
        "comments": 89
    },
    {
        "id": 342,
        "author": {
            "id": 69,
            "name": "João Pedro Silva",
            "username": "@joaopedro_silva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69"
        },
        "content": "Prometi que ia acordar cês 5h da manhã. Acordei 5h sim. 5h da tarde. O importante é cumprir a promessa. 🌞😴 #AcordarCedo #Metas",
        "hashtags": ["#AcordarCedo", "#Metas", "#TardeTambémVale"],
        "createAt": "2026-04-01T13:45:33Z",
        "likes": 734,
        "comments": 156
    },
    {
        "id": 343,
        "author": {
            "id": 69,
            "name": "João Pedro Silva",
            "username": "@joaopedro_silva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69"
        },
        "content": "Minha dieta: café da manhã saudável, almoço balanceado, jantar leve. O intervalo entre eles: uma aventura gastronômica sem limites. Equilíbrio é tudo. 🍔🥗 #Dieta #Equilibrio #ValeTudo",
        "hashtags": ["#Dieta", "#Equilibrio", "#ValeTudo"],
        "createAt": "2026-04-01T16:10:47Z",
        "likes": 892,
        "comments": 201
    },
    {
        "id": 344,
        "author": {
            "id": 69,
            "name": "João Pedro Silva",
            "username": "@joaopedro_silva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69"
        },
        "content": "Comprei um curso de investimentos. A primeira dica: \"gaste menos do que você ganha.\" Com essa informação, já posso pedir reembolso ou ainda tem mais? 📉💸 #Investimentos #DicaValiosa",
        "hashtags": ["#Investimentos", "#DicaValiosa", "#Reembolso"],
        "createAt": "2026-04-01T18:55:22Z",
        "likes": 645,
        "comments": 123
    },
    {
        "id": 345,
        "author": {
            "id": 69,
            "name": "João Pedro Silva",
            "username": "@joaopedro_silva",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/69"
        },
        "content": "Estou no meu nono dia consecutivo dizendo que vou organizar minha vida amanhã. Amanhã é um dia muito produtivo, pelo menos no papel. 📅✨ #Organizacao #AmanhaEuFaco #VidaQueSegue",
        "hashtags": ["#Organizacao", "#AmanhaEuFaco", "#VidaQueSegue"],
        "createAt": "2026-04-01T21:30:05Z",
        "likes": 789,
        "comments": 178
    },
    {
        "id": 346,
        "author": {
            "id": 70,
            "name": "Татьяна Анастасия",
            "username": "@тати_анастасия",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70"
        },
        "content": "Мой терапевт спросил, почему я всегда серьёзная. Я сказала: «в России улыбка без причины — признак душевного расстройства». Теперь он боится меня. 🧥❄️ #РусскаяДуша #Психология",
        "hashtags": ["#РусскаяДуша", "#Психология", "#БезУлыбки"],
        "createAt": "2026-04-01T09:30:22Z",
        "likes": 891,
        "comments": 156
    },
    {
        "id": 347,
        "author": {
            "id": 70,
            "name": "Татьяна Анастасия",
            "username": "@тати_анастасия",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70"
        },
        "content": "Коллега: «ты чего такая грустная?»\nЯ: «это не грусть, это моё лицо»\nКоллега: «улыбнись!»\nТеперь у меня два врага: коллега и жизнь. 😐🔪 #РусскийСервис #ЛицоПоУмолчанию",
        "hashtags": ["#РусскийСервис", "#ЛицоПоУмолчанию", "#Интроверт"],
        "createAt": "2026-04-01T12:15:45Z",
        "likes": 1023,
        "comments": 234
    },
    {
        "id": 348,
        "author": {
            "id": 70,
            "name": "Татьяна Анастасия",
            "username": "@тати_анастасия",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70"
        },
        "content": "Зима в России: выходишь из дома — минус 25. Через час — плюс 3 и дождь. Вечером — снегопад. Я не жалуюсь. Жаловаться — это слабость. Просто констатирую факт: природа нас ненавидит. 🌨️🌧️❄️ #РусскаяЗима #ПогодаХарактер",
        "hashtags": ["#РусскаяЗима", "#ПогодаХарактер", "#Выживаем"],
        "createAt": "2026-04-01T14:50:33Z",
        "likes": 1156,
        "comments": 278
    },
    {
        "id": 349,
        "author": {
            "id": 70,
            "name": "Татьяна Анастасия",
            "username": "@тати_анастасия",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70"
        },
        "content": "Подруга спросила: «почему ты никогда не опаздываешь?»\nЯ: «в России если опоздал — значит, ты мёртв или предатель. Я ещё жива и не переходила на сторону врага».\nОна больше не спрашивает. ⏰🇷🇺 #Пунктуальность #РусскийМенталитет",
        "hashtags": ["#Пунктуальность", "#РусскийМенталитет", "#НиМинуты"],
        "createAt": "2026-04-01T17:25:12Z",
        "likes": 967,
        "comments": 189
    },
    {
        "id": 350,
        "author": {
            "id": 70,
            "name": "Татьяна Анастасия",
            "username": "@тати_анастасия",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/70"
        },
        "content": "Переехала в Бразилию. Люди здесь улыбаются просто так. На улице. Незнакомцам. Я думала, это ловушка. Оказалось — просто культура. Теперь я та русская, которая улыбается и пугает местных. 🌴😃🇧🇷 #РусскаяВБразилии #КультурныйШок",
        "hashtags": ["#РусскаяВБразилии", "#КультурныйШок", "#ТеперьУлыбаюсь"],
        "createAt": "2026-04-01T20:40:05Z",
        "likes": 1345,
        "comments": 345
    },
    {
        "id": 351,
        "author": {
            "id": 71,
            "name": "Alessandra Dumon",
            "username": "@aleh_dumon",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71"
        },
        "content": "Minha meta de 2026 era ser mais paciente. Já é abril e ontem briguei com um poste porque ele estava no meu caminho. Acho que vou tentar de novo ano que vem. 🌳😤 #Paciencia #Metas2026 #PosteInimigo",
        "hashtags": ["#Paciencia", "#Metas2026", "#PosteInimigo"],
        "createAt": "2026-04-02T09:15:33Z",
        "likes": 567,
        "comments": 89
    },
    {
        "id": 352,
        "author": {
            "id": 71,
            "name": "Alessandra Dumon",
            "username": "@aleh_dumon",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71"
        },
        "content": "Gente que acorda 5h da manhã pra meditar merece um prêmio. Eu acordo 5h da manhã pra descobrir que ainda são 5h da manhã e volto a dormir. Também mereço um prêmio. Pela honestidade. 🛌🏆 #AcordarCedo #Honestidade #PremioDorminhoca",
        "hashtags": ["#AcordarCedo", "#Honestidade", "#PremioDorminhoca"],
        "createAt": "2026-04-02T12:30:22Z",
        "likes": 823,
        "comments": 156
    },
    {
        "id": 353,
        "author": {
            "id": 71,
            "name": "Alessandra Dumon",
            "username": "@aleh_dumon",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71"
        },
        "content": "Minha mãe disse que eu era a filha mais difícil de criar. Eu disse que ela era a mãe mais difícil de aturar. Nós duas rimos. Depois ela me cobrou um abraço com juros. Acho que perdi. 👩👧❤️ #MãeEFilha #RelacoesFamiliares #SemprePerco",
        "hashtags": ["#MãeEFilha", "#RelacoesFamiliares", "#SemprePerco"],
        "createAt": "2026-04-02T15:45:47Z",
        "likes": 945,
        "comments": 201
    },
    {
        "id": 354,
        "author": {
            "id": 71,
            "name": "Alessandra Dumon",
            "username": "@aleh_dumon",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71"
        },
        "content": "Comprei uma agenda bonita pra organizar minha vida. A agenda está impecável. Minha vida continua um caos. Pelo menos tenho algo bonito pra olhar enquanto tudo desaba. 📒✨ #Organizacao #Prioridades #AgendaPerfeita",
        "hashtags": ["#Organizacao", "#Prioridades", "#AgendaPerfeita"],
        "createAt": "2026-04-02T18:20:12Z",
        "likes": 734,
        "comments": 134
    },
    {
        "id": 355,
        "author": {
            "id": 71,
            "name": "Alessandra Dumon",
            "username": "@aleh_dumon",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/71"
        },
        "content": "Fui na terapia e a terapeuta disse: \"você precisa se priorizar\". Eu disse: \"priorizar o que? O sono ou a comida?\" Ela anotou algo no caderno com uma cara estranha. Acho que virei caso de estudo. 🛋️📝 #Terapia #AutoPrioridade #CasoComplexo",
        "hashtags": ["#Terapia", "#AutoPrioridade", "#CasoComplexo"],
        "createAt": "2026-04-02T21:05:05Z",
        "likes": 1012,
        "comments": 267
    },
    {
        "id": 356,
        "author": {
            "id": 72,
            "name": "Melinda Andrades",
            "username": "@a_melinda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72"
        },
        "content": "Minha personalidade é 50% ansiedade, 30% preguiça e 20% talento para fingir que estou ocupada. O segredo é fazer parecer convincente. 🎭😅 #Personalidade #FingirOcupada #VidaReal",
        "hashtags": ["#Personalidade", "#FingirOcupada", "#VidaReal"],
        "createAt": "2026-04-02T10:20:15Z",
        "likes": 678,
        "comments": 145
    },
    {
        "id": 357,
        "author": {
            "id": 72,
            "name": "Melinda Andrades",
            "username": "@a_melinda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72"
        },
        "content": "Comecei uma dieta hoje. Almocei salada, tomei suco detox, me senti uma nova pessoa. Aí bateu 15h e eu já estava pesquisando delivery de hambúrguer. O importante é tentar. 🥗🍔 #Dieta #TentativaNumero47 #HamburguerSalva",
        "hashtags": ["#Dieta", "#TentativaNumero47", "#HamburguerSalva"],
        "createAt": "2026-04-02T13:45:33Z",
        "likes": 892,
        "comments": 234
    },
    {
        "id": 358,
        "author": {
            "id": 72,
            "name": "Melinda Andrades",
            "username": "@a_melinda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72"
        },
        "content": "Meu superpoder é saber exatamente o que vou responder 3 horas depois que a conversa acabou. As melhores ideias sempre vêm no banho. 🚿💡 #Superpoder #IdeiasTardias #BanhoFilosofico",
        "hashtags": ["#Superpoder", "#IdeiasTardias", "#BanhoFilosofico"],
        "createAt": "2026-04-02T16:10:47Z",
        "likes": 734,
        "comments": 167
    },
    {
        "id": 359,
        "author": {
            "id": 72,
            "name": "Melinda Andrades",
            "username": "@a_melinda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72"
        },
        "content": "Me perguntaram qual meu maior medo. Respondi: abrir o WhatsApp e ter 47 mensagens não lidas de pessoas que esperam respostas profundas. O terror existe. 📱😱 #Medo #WhatsApp #AnsiedadeSocial",
        "hashtags": ["#Medo", "#WhatsApp", "#AnsiedadeSocial"],
        "createAt": "2026-04-02T18:55:22Z",
        "likes": 1023,
        "comments": 289
    },
    {
        "id": 360,
        "author": {
            "id": 72,
            "name": "Melinda Andrades",
            "username": "@a_melinda",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/72"
        },
        "content": "Juro que vou arrumar minha vida. Só não sei quando. Mas vou. Provavelmente. Talvez. A gente se fala. 📅🤡 #Promessa #VidaQueSegue #TalvezUmDia",
        "hashtags": ["#Promessa", "#VidaQueSegue", "#TalvezUmDia"],
        "createAt": "2026-04-02T21:30:05Z",
        "likes": 845,
        "comments": 178
    },
    {
        "id": 361,
        "author": {
            "id": 73,
            "name": "Juh Kin",
            "username": "@juh_kin_72",
            "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/73"
        },
        "content": "Here in China is very ensolared",
        "hashtags": ["#china"],
        "createAt": "2026-04-03T08:30:22Z",
        "likes": 1234,
        "comments": 345
    },
    {
        "id": 362,
        "author": {
            "id": 73,
            "name": "Juh Kin",
            "username": "@juh_kin_72",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/73"
        },
        "content": "Here in China is very ensolared",
        "hashtags": ["#china"],
        "createAt": "2026-04-03T11:45:33Z",
        "likes": 987,
        "comments": 234
    },
    {
        "id": 363,
        "author": {
            "id": 73,
            "name": "Juh Kin",
            "username": "@juh_kin_72",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/73"
        },
        "content": "The life is very nice, guys.",
        "hashtags": ["#life"]
        "createAt": "2026-04-03T14:20:47Z",
        "likes": 1456,
        "comments": 278
    },
    {
        "id": 364,
        "author": {
            "id": 73,
            "name": "Juh Kin",
            "username": "@juh_kin_72",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/73"
        },
        "content": "One day, i want to go to the United States",
        "hashtags": ["#USA", "#China"],
        "createAt": "2026-04-03T17:55:12Z",
        "likes": 1678,
        "comments": 456
    },
    {
        "id": 365,
        "author": {
            "id": 73,
            "name": "Juh Kin",
            "username": "@juh_kin_72",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/73"
        },
        "content": "One day, i want to go to the United Kingdon",
        "hashtags": ["#China", "#UK"],
        "createAt": "2026-04-03T20:40:05Z",
        "likes": 1890,
        "comments": 512
    },
    {
        "id": 366,
        "author": {
            "id": 74,
            "name": "Sora Hana",
            "username": "@sora_hana",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/74"
        },
        "content": "Nothing to speak, the life is very beautiful - Kuji Oklahoma",
        "hashtags": ["#Citacao", "#kuji"],
        "createAt": "2026-04-03T09:15:22Z",
        "likes": 2134,
        "comments": 456
    },
    {
        "id": 367,
        "author": {
            "id": 74,
            "name": "Sora Hana",
            "username": "@sora_hana",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/74"
        },
        "content": "Life in korea is very dificult",
        "hashtags": [],
        "createAt": "2026-04-03T12:30:45Z",
        "likes": 1876,
        "comments": 345
    },
    {
        "id": 368,
        "author": {
            "id": 74,
            "name": "Sora Hana",
            "username": "@sora_hana",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/74"
        },
        "content": "One day, i want to go to the my house in Chicago. Is my drean.",
        "hashtags": [],
        "createAt": "2026-04-03T15:45:33Z",
        "likes": 2456,
        "comments": 567
    },
    {
        "id": 369,
        "author": {
            "id": 74,
            "name": "Sora Hana",
            "username": "@sora_hana",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/74"
        },
        "content": "My dog's name is Alex, i like hin.",
        "hashtags": ["#pets"],
        "createAt": "2026-04-03T18:20:12Z",
        "likes": 1678,
        "comments": 389
    },
    {
        "id": 370,
        "author": {
            "id": 74,
            "name": "Sora Hana",
            "username": "@sora_hana",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/74"
        },
        "content": "My dog, Alex, like to drink milk. Very cute",
        "hashtags": [],
        "createAt": "2026-04-03T21:05:05Z",
        "likes": 2987,
        "comments": 678
    },
    {
        "id": 371,
        "author": {
            "id": 75,
            "name": "Min-jun",
            "username": "@min_jun21",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/75"
        },
        "content": "Hi, guys. Good morning at this morning",
        "hashtags": [],
        "createAt": "2026-04-03T10:15:33Z",
        "likes": 1567,
        "comments": 234
    },
    {
        "id": 372,
        "author": {
            "id": 75,
            "name": "Min-jun",
            "username": "@min_jun21",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/75"
        },
        "content": "Hello, there! Have a nice day",
        "hashtags": ["#goodday"],
        "createAt": "2026-04-03T13:40:22Z",
        "likes": 1890,
        "comments": 345
    },
    {
        "id": 373,
        "author": {
            "id": 75,
            "name": "Min-jun",
            "username": "@min_jun21",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/75"
        },
        "content": "Good afternoon",
        "hashtags": ["#goodafternoon"],
        "createAt": "2026-04-03T16:55:47Z",
        "likes": 2234,
        "comments": 567
    },
    {
        "id": 374,
        "author": {
            "id": 75,
            "name": "Min-jun",
            "username": "@min_jun21",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/75"
        },
        "content": "Hello, guys! Have a nice night",
        "hashtags": ["#Goodnight"],
        "createAt": "2026-04-03T19:30:12Z",
        "likes": 1345,
        "comments": 289
    },
    {
        "id": 375,
        "author": {
            "id": 75,
            "name": "Min-jun",
            "username": "@min_jun21",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/75"
        },
        "content": "May God bless you, dear ones.",
        "hashtags": [],
        "createAt": "2026-04-03T22:15:05Z",
        "likes": 2456,
        "comments": 678
    },
    {
        "id": 376,
        "author": {
            "id": 76,
            "name": "Si-Woo",
            "username": "@si_woo20",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/76"
        },
        "content": "Today was a tiring day, goodnight everyone, I'm going to rest.",
        "hashtags": [],
        "createAt": "2026-04-04T08:20:15Z",
        "likes": 1567,
        "comments": 234
    },
    {
        "id": 377,
        "author": {
            "id": 76,
            "name": "Si-Woo",
            "username": "@si_woo20",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/76"
        },
        "content": "I find it incredible how my puppy can bite her own tail.",
        "hashtags": [],
        "createAt": "2026-04-04T11:45:33Z",
        "likes": 1890,
        "comments": 345
    },
    {
        "id": 378,
        "author": {
            "id": 76,
            "name": "Si-Woo",
            "username": "@si_woo20",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/76"
        },
        "content": "My daughter is funny sometimes.",
        "hashtags": [],
        "createAt": "2026-04-04T14:30:47Z",
        "likes": 2789,
        "comments": 456
    },
    {
        "id": 379,
        "author": {
            "id": 76,
            "name": "Si-Woo",
            "username": "@si_woo20",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/76"
        },
        "content": "My puppy likes to jump in the mud.",
        "hashtags": [],
        "createAt": "2026-04-04T17:55:22Z",
        "likes": 2134,
        "comments": 567
    },
    {
        "id": 380,
        "author": {
            "id": 76,
            "name": "Si-Woo",
            "username": "@si_woo20",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/76"
        },
        "content": "Here in China, summer lasts a long time.",
        "hashtags": [],
        "createAt": "2026-04-04T20:40:12Z",
        "likes": 1678,
        "comments": 389
    },
    {
        "id": 381,
        "author": {
            "id": 77,
            "name": "Kin-juh",
            "username": "@kin_juh",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/77"
        },
        "content": "Escaping laziness while I sleep dreaming...",
        "hashtags": [],
        "createAt": "2026-04-04T09:30:22Z",
        "likes": 1890,
        "comments": 345
    },
    {
        "id": 382,
        "author": {
            "id": 77,
            "name": "Kin-juh",
            "username": "@kin_juh",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/77"
        },
        "content": "One day, I still want to go to the Appalachian Mountains.",
        "hashtags": [],
        "createAt": "2026-04-04T12:45:33Z",
        "likes": 2234,
        "comments": 456
    },
    {
        "id": 383,
        "author": {
            "id": 77,
            "name": "Kin-juh",
            "username": "@kin_juh",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/77"
        },
        "content": "I still want to visit Las Vegas; I think the city is very beautiful.",
        "hashtags": [],
        "createAt": "2026-04-04T15:20:47Z",
        "likes": 1567,
        "comments": 234
    },
    {
        "id": 384,
        "author": {
            "id": 77,
            "name": "Kin-juh",
            "username": "@kin_juh",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/77"
        },
        "content": "Traveling and meeting new people, that's how I live life.",
        "hashtags": [],
        "createAt": "2026-04-04T18:55:12Z",
        "likes": 2456,
        "comments": 567
    },
    {
        "id": 385,
        "author": {
            "id": 77,
            "name": "Kin-juh",
            "username": "@kin_juh",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/77"
        },
        "content": "The sun and the moon are the two most fascinating celestial bodies I know.",
        "hashtags": [],
        "createAt": "2026-04-04T21:40:05Z",
        "likes": 3123,
        "comments": 789
    },
    {
        "id": 386,
        "author": {
            "id": 78,
            "name": "Talyta Amorin",
            "username": "@me_talyta",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/78"
        },
        "content": "Meu maior investimento até hoje foi comprar um curso sobre como investir. O curso ensinou que o melhor investimento é educação. Então tecnicamente, paguei pra aprender que devia ter guardado o dinheiro. 🧠💰 #Finfluencer #EducacaoFinanceira #LoopInfinito",
        "hashtags": ["#Finfluencer", "#EducacaoFinanceira", "#LoopInfinito"],
        "createAt": "2026-04-05T09:15:33Z",
        "likes": 2134,
        "comments": 456
    },
    {
        "id": 387,
        "author": {
            "id": 78,
            "name": "Talyta Amorin",
            "username": "@me_talyta",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/78"
        },
        "content": "Seguidor me perguntou: \"qual o segredo pra ficar rico?\" Respondi: \"gastar menos do que ganha.\" Ele: \"já faço isso.\" Eu: \"então cadê a riqueza?\" Ele: \"tô esperando sobrar alguma coisa pra investir.\" Aí complica. 💸🤡 #Financas #SegredoDaRiqueza #TambemEspero",
        "hashtags": ["#Financas", "#SegredoDaRiqueza", "#TambemEspero"],
        "createAt": "2026-04-05T12:30:45Z",
        "likes": 2678,
        "comments": 567
    },
    {
        "id": 388,
        "author": {
            "id": 78,
            "name": "Talyta Amorin",
            "username": "@me_talyta",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/78"
        },
        "content": "Parei de comprar café na rua pra economizar. Economizei R$ 300 no mês. Usei os R$ 300 pra comprar uma cápsula de café que prometia 'experiência sensorial única'. Marketing financeiro é meu novo vilão. ☕😤 #FinancasPessoais #Cafe #MarketingVilao",
        "hashtags": ["#FinancasPessoais", "#Cafe", "#MarketingVilao"],
        "createAt": "2026-04-05T15:45:22Z",
        "likes": 1890,
        "comments": 345
    },
    {
        "id": 389,
        "author": {
            "id": 78,
            "name": "Talyta Amorin",
            "username": "@me_talyta",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/78"
        },
        "content": "Meu método infalível pra economizar: toda vez que quero comprar algo, espero 30 dias. Se ainda quiser, compro. Usei o método hoje com um desejo de comprar um carro novo. Esperei 30 segundos e já desisti. Economizei R$ 80 mil. Funciona. 🚗💨 #MetodoInfalivel #EconomiaRadical",
        "hashtags": ["#MetodoInfalivel", "#EconomiaRadical", "#AutoControle"],
        "createAt": "2026-04-05T18:20:12Z",
        "likes": 3123,
        "comments": 678
    },
    {
        "id": 390,
        "author": {
            "id": 78,
            "name": "Talyta Amorin",
            "username": "@me_talyta",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/78"
        },
        "content": "Finfluencer mais honesta do Brasil: não, você não vai ficar milionário com bolo de pote. Sim, você vai ficar rico trabalhando, estudando e investindo com consistência. Mas isso dá trabalho, né? Melhor comprar meu curso que promete milagre. Mentira, não compre. Estuda de graça no YouTube. 📚😅 #FinfluencerHonesta #EducacaoGratuita #MercadoFinanceiro",
        "hashtags": ["#FinfluencerHonesta", "#EducacaoGratuita", "#MercadoFinanceiro"],
        "createAt": "2026-04-05T21:05:05Z",
        "likes": 4567,
        "comments": 890
    },
    {
        "id": 391,
        "author": {
            "id": 79,
            "name": "Lidya Santinon",
            "username": "@eu_lydia",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/79"
        },
        "content": "Minha rotina matinal: despertador toca, eu acordo, olho o celular, volto a dormir, acordo de novo, prometo que amanhã vou acordar cedo, levanto correndo, me arrependo de tudo. Tudo isso em 15 minutos. 🌞😴 #RotinaMatinal #AcordarÉDifícil #CicloInfinito",
        "hashtags": ["#RotinaMatinal", "#AcordarÉDifícil", "#CicloInfinito"],
        "createAt": "2026-04-05T10:20:33Z",
        "likes": 1876,
        "comments": 345
    },
    {
        "id": 392,
        "author": {
            "id": 79,
            "name": "Lidya Santinon",
            "username": "@eu_lydia",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/79"
        },
        "content": "Fui no supermercado comprar só uma coisa. Saí com um carrinho cheio, uma dívida emocional e nenhuma lembrança do que eu fui comprar. O supermercado é o novo bicho-papão das finanças pessoais. 🛒😱 #Supermercado #ComprasPorImpulso #CadêALista",
        "hashtags": ["#Supermercado", "#ComprasPorImpulso", "#CadêALista"],
        "createAt": "2026-04-05T13:45:22Z",
        "likes": 2345,
        "comments": 456
    },
    {
        "id": 393,
        "author": {
            "id": 79,
            "name": "Lidya Santinon",
            "username": "@eu_lydia",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/79"
        },
        "content": "Meu cérebro às 3h da manhã: 'lembra aquele comentário que você fez em 2018? Pois é, foi estranho. Vamos analisar isso pelos próximos 2 horas.' E eu só queria dormir. 🧠🌙 #Insônia #PensamentosNoturnos #CérebroInimigo",
        "hashtags": ["#Insônia", "#PensamentosNoturnos", "#CérebroInimigo"],
        "createAt": "2026-04-05T16:30:47Z",
        "likes": 2987,
        "comments": 567
    },
    {
        "id": 394,
        "author": {
            "id": 79,
            "name": "Lidya Santinon",
            "username": "@eu_lydia",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/79"
        },
        "content": "Tentei fazer uma receita saudável que vi no TikTok. Resultado: queimei a frigideira, estraguei a comida, pedi pizza e ainda fingi que nada aconteceu. Pelo menos a pizza estava boa. 🍕👩🍳 #Culinária #TikTokFalhou #PizzaSalva",
        "hashtags": ["#Culinária", "#TikTokFalhou", "#PizzaSalva"],
        "createAt": "2026-04-05T19:15:12Z",
        "likes": 1567,
        "comments": 234
    },
    {
        "id": 395,
        "author": {
            "id": 79,
            "name": "Lidya Santinon",
            "username": "@eu_lydia",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/79"
        },
        "content": "Me perguntaram qual meu maior medo. Respondi: abrir o Instagram e ver que minha ex está mais feliz do que eu. Mas aí lembrei que eu nem tenho ex. Meu maior medo é ficar sem café. ☕😰 #MedosReais #Cafeína #Prioridades",
        "hashtags": ["#MedosReais", "#Cafeína", "#Prioridades"],
        "createAt": "2026-04-05T22:00:05Z",
        "likes": 1789,
        "comments": 345
    },
    {
        "id": 396,
        "author": {
            "id": 80,
            "name": "Santiago Dantas",
            "username": "@ele_santiago",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/80"
        },
        "content": "Fui na academia hoje pela primeira vez no ano. O instrutor perguntou meu objetivo. Eu disse: \"sobreviver.\" Ele riu. Eu não tava brincando. 🏋️💀 #Academia #PrimeiroDia #Sobrevivencia",
        "hashtags": ["#Academia", "#PrimeiroDia", "#Sobrevivencia"],
        "createAt": "2026-04-06T09:15:33Z",
        "likes": 2345,
        "comments": 456
    },
    {
        "id": 397,
        "author": {
            "id": 80,
            "name": "Santiago Dantas",
            "username": "@ele_santiago",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/80"
        },
        "content": "Minha mãe disse que eu preciso arrumar uma namorada. Eu disse que tô focando na carreira. Ela disse: \"focando no que? Você nem trabalha direito.\" Aí ela me quebrou. 💔😅 #Mae #Solteiro #FocoImaginario",
        "hashtags": ["#Mae", "#Solteiro", "#FocoImaginario"],
        "createAt": "2026-04-06T12:30:45Z",
        "likes": 2789,
        "comments": 567
    },
    {
        "id": 398,
        "author": {
            "id": 80,
            "name": "Santiago Dantas",
            "username": "@ele_santiago",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/80"
        },
        "content": "Comprei um tênis novo. Lindo. Perfeito. Usei um dia. Meu cachorro comeu. Agora tô eu aqui refletindo sobre as escolhas de vida: a minha de comprar e a dele de comer. 🐶👟 #TênisNovo #Cachorro #Reflexao",
        "hashtags": ["#TênisNovo", "#Cachorro", "#Reflexao"],
        "createAt": "2026-04-06T15:45:22Z",
        "likes": 3123,
        "comments": 678
    },
    {
        "id": 399,
        "author": {
            "id": 80,
            "name": "Santiago Dantas",
            "username": "@ele_santiago",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/80"
        },
        "content": "Meu superpoder é deixar tudo pra última hora e ainda achar que vou dar conta. Spoiler: nunca dou. Mas a emoção da adrenalina compensa. Ou não. ⏰😅 #UltimaHora #Adrenalina #Procrastinacao",
        "hashtags": ["#UltimaHora", "#Adrenalina", "#Procrastinacao"],
        "createAt": "2026-04-06T18:20:12Z",
        "likes": 1890,
        "comments": 345
    },
    {
        "id": 400,
        "author": {
            "id": 80,
            "name": "Santiago Dantas",
            "username": "@ele_santiago",
            "avatar": "https://social-toolkit-psi.vercel.app/api/avatar/id/80"
        },
        "content": "Me perguntaram qual conselho eu daria pro meu eu do passado. Respondi: \"compra Bitcoin em 2010 e não responde sua ex.\" Meu eu do passado não ouviu. Meu eu do presente continua pobre e solteiro. 💸💔 #Conselho #Bitcoin #Ex",
        "hashtags": ["#Conselho", "#Bitcoin", "#Ex"],
        "createAt": "2026-04-06T21:05:05Z",
        "likes": 4567,
        "comments": 890
    }
]
</pre>
</details>

<br>

**Retorna todas as postagens de um usuário**

```
social-toolkit-gamma.vercel.app/api/post/all/user/eu_nataly_lima
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
  {
    "id": 51,
      "author": {
        "id": 11,
        "name": "Nataly Lima",
        "username": "@eu_nataly_lima",
        "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
    },
    "content": "Hoje foi dia de ensaio longo. Cada nota precisa de dedicação e paixão. 🎻✨",
    "hashtags": ["#violinista", "#ensaios", "#musica"],
    "createdAt": "2025-03-27T10:15:00Z",
    "likes": 178,
    "comments": 21
  },
  {
    "id": 52,
    "author": {
      "id": 11,
      "name": "Nataly Lima",
      "username": "@eu_nataly_lima",
      "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
    },
    "content": "A energia do palco é indescritível! Amo sentir a música vibrar junto com o público. 🎶❤️",
    "hashtags": ["#show", "#violin", "#paixão"],
    "createdAt": "2025-03-28T20:00:00Z",
    "likes": 213,
    "comments": 34
  },
  {
    "id": 53,
    "author": {
      "id": 11,
      "name": "Nataly Lima",
      "username": "@eu_nataly_lima",
      "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
    },
    "content": "Praticar diariamente faz toda a diferença. Persistência é a chave para a maestria. 🗝️🎻",
    "hashtags": ["#prática", "#disciplina", "#musica"],
    "createdAt": "2025-03-29T08:30:00Z",
    "likes": 165,
    "comments": 19
  },
  {
    "id": 54,
    "author": {
      "id": 11,
      "name": "Nataly Lima",
      "username": "@eu_nataly_lima",
      "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
    },
    "content": "Momentos de inspiração aparecem nos lugares mais inesperados. Hoje, no parque, veio uma melodia linda. 🍃🎵",
    "hashtags": ["#inspiração", "#violinista", "#natureza"],
    "createdAt": "2025-03-30T16:20:00Z",
    "likes": 142,
    "comments": 16
  },
  {
    "id": 55,
    "author": {
      "id": 11,
      "name": "Nataly Lima",
      "username": "@eu_nataly_lima",
      "avatar": "https://social-toolkit-gamma.vercel.app/api/avatar/id/11"
    },
    "content": "Nada se compara ao sentimento de compor uma nova música e ouvir cada nota ganhar vida. ✨🎻",
    "hashtags": ["#composição", "#música", "#emoção"],
    "createdAt": "2025-03-31T19:45:00Z",
    "likes": 191,
    "comments": 28
  }    
</pre>
</details>

<br>

## Geração de nomes

**Retorna um nome aleatório**

```
social-toolkit-gamma.vercel.app/api/name/random
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
"Rodrigo Ferreira"
</pre>
  
</details>

<br>

**Retorna um nome aleatório feminino**

```
social-toolkit-gamma.vercel.app/api/name/random/gender/f
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>

<pre>
"Aline Mendes"
</pre>
</details>

<br>

**Retorna um nome aleatório masculino**

```
social-toolkit-gamma.vercel.app/api/name/random/gender/m
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
"Bernardo Cardoso"    
</pre>
</details>

<br>

**Retorna todos os nomes da API**

```
social-toolkit-gamma.vercel.app/api/name/all
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
[
    "Adriana Martins",
    "Alan Ferreira",
    "Alberto Nascimento",
    "Aline Mendes",
    "Amanda Albuquerque",
    "André Figueiredo",
    "Angela Monteiro",
    "Antônio Siqueira",
    "Ariane Couto",
    "Bárbara Freire",
    "Bernardo Cardoso",
    "Bruna Duarte",
    "Bruno Araújo",
    "Caio Barbosa",
    "Camila Peixoto",
    "Carla Guimarães",
    "Carlos Magalhães",
    "Carolina Assis",
    "César Paiva",
    "Cláudia Moura",
    "Cristiano Pacheco",
    "Daniela Braga",
    "Danilo Rezende",
    "Diego Lopes",
    "Eduarda Campos",
    "Eduardo Fontes",
    "Eliana Bastos",
    "Elias Correia",
    "Elisa Vasconcelos",
    "Elisângela Brito",
    "Emerson Cunha",
    "Enzo Moraes",
    "Erika Tavares",
    "Estela Queiroz",
    "Fábio Lima",
    "Felipe Martins",
    "Fernanda Costa",
    "Flávia Moreira",
    "Francisco Silveira",
    "Gabriel Nunes",
    "Geovana Andrade",
    "Giselle Maciel",
    "Giulia Rocha",
    "Guilherme Batista",
    "Gustavo Vieira",
    "Heitor Campos",
    "Helena Carvalho",
    "Heloísa Porto",
    "Henrique Borges",
    "Hugo Fonseca",
    "Igor Rezende",
    "Ingrid Barros",
    "Isabela Lopes",
    "Isadora Pires",
    "Jaqueline Soares",
    "João Victor",
    "Jorge Almeida",
    "José Roberto",
    "Juliana Ribeiro",
    "Karen Matos",
    "Karina Teixeira",
    "Kátia Furtado",
    "Kelly Moraes",
    "Larissa Pimentel",
    "Lauro Peixoto",
    "Leandro Torres",
    "Leonardo Brito",
    "Letícia Carvalho",
    "Lívia Monteiro",
    "Lorena Cardoso",
    "Lucas Mendes",
    "Luís Otávio",
    "Luiza Moretti",
    "Luna Rodrigues",
    "Marcela Castro",
    "Marcos Vinícius",
    "Mariana Campos",
    "Marina Albuquerque",
    "Mateus Prado",
    "Matheus Cardoso",
    "Mayara Silveira",
    "Melissa Barros",
    "Miguel Cunha",
    "Milena Duarte",
    "Mirela Gomes",
    "Monique Assis",
    "Natália Torres",
    "Nicolas Souza",
    "Patrícia Oliveira",
    "Paulo Henrique",
    "Pedro Augusto",
    "Priscila Martins",
    "Rafael Lopes",
    "Raissa Barreto",
    "Rebeca Nogueira",
    "Renato Monteiro",
    "Ricardo Lima",
    "Rodrigo Ferreira",
    "Samuel Moreira",
    "Sara Andrade",
    "Sérgio Almeida",
    "Simone Batista",
    "Vanessa Correia",
    "Victor Hugo",
    "Vinícius Costa"
]
</pre>
</details>

<br>

**Retorna todos os nomes femininos da API**

```
social-toolkit-gamma.vercel.app/api/name/all/gender/f
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
[
    "Adriana Martins",
    "Aline Mendes",
    "Amanda Albuquerque",
    "Angela Monteiro",
    "Ariane Couto",
    "Bárbara Freire",
    "Bruna Duarte",
    "Camila Peixoto",
    "Carla Guimarães",
    "Carolina Assis",
    "Cláudia Moura",
    "Daniela Braga",
    "Eduarda Campos",
    "Eliana Bastos",
    "Elisa Vasconcelos",
    "Elisângela Brito",
    "Erika Tavares",
    "Estela Queiroz",
    "Fernanda Costa",
    "Flávia Moreira",
    "Geovana Andrade",
    "Giselle Maciel",
    "Giulia Rocha",
    "Helena Carvalho",
    "Heloísa Porto",
    "Ingrid Barros",
    "Isabela Lopes",
    "Isadora Pires",
    "Jaqueline Soares",
    "Juliana Ribeiro",
    "Karen Matos",
    "Karina Teixeira",
    "Kátia Furtado",
    "Kelly Moraes",
    "Larissa Pimentel",
    "Letícia Carvalho",
    "Lívia Monteiro",
    "Lorena Cardoso",
    "Luiza Moretti",
    "Luna Rodrigues",
    "Marcela Castro",
    "Mariana Campos",
    "Marina Albuquerque",
    "Mayara Silveira",
    "Melissa Barros",
    "Milena Duarte",
    "Mirela Gomes",
    "Monique Assis",
    "Natália Torres",
    "Patrícia Oliveira",
    "Priscila Martins",
    "Raissa Barreto",
    "Rebeca Nogueira",
    "Sara Andrade",
    "Simone Batista",
    "Vanessa Correia"
]
</pre>
</details>

<br>

**Retorna todos os nomes masculinos da API**

```
social-toolkit-gamma.vercel.app/api/name/all/gender/m
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
[
    "Alan Ferreira",
    "Alberto Nascimento",
    "André Figueiredo",
    "Antônio Siqueira",
    "Bernardo Cardoso",
    "Bruno Araújo",
    "Caio Barbosa",
    "Carlos Magalhães",
    "César Paiva",
    "Cristiano Pacheco",
    "Danilo Rezende",
    "Diego Lopes",
    "Eduardo Fontes",
    "Elias Correia",
    "Emerson Cunha",
    "Enzo Moraes",
    "Fábio Lima",
    "Felipe Martins",
    "Francisco Silveira",
    "Gabriel Nunes",
    "Guilherme Batista",
    "Gustavo Vieira",
    "Heitor Campos",
    "Henrique Borges",
    "Hugo Fonseca",
    "Igor Rezende",
    "João Victor",
    "Jorge Almeida",
    "José Roberto",
    "Lauro Peixoto",
    "Leandro Torres",
    "Leonardo Brito",
    "Lucas Mendes",
    "Luís Otávio",
    "Marcos Vinícius",
    "Mateus Prado",
    "Matheus Cardoso",
    "Miguel Cunha",
    "Nicolas Souza",
    "Paulo Henrique",
    "Pedro Augusto",
    "Rafael Lopes",
    "Renato Monteiro",
    "Ricardo Lima",
    "Rodrigo Ferreira",
    "Samuel Moreira",
    "Sérgio Almeida",
    "Victor Hugo",
    "Vinícius Costa"
]
</pre>
</details>

<br>

## Geração de bios

**Retorna uma bio aleatória**

```
social-toolkit-gamma.vercel.app/api/bio/random
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
"Consultor em enrolar até a hora passar."
</pre>
</details>

<br>

## Emails

**Gera um email aleatório**

```
social-toolkit-gamma.vercel.app/api/email/random
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
"leonardomachado86@gmail.com"
</pre>
</details>

<br>

**Gera um email aleatório por domínio**

```
social-toolkit-gamma.vercel.app/api/email/random/domain/gmail
```

<details>
  <summary><b>Exemplo de retorno:</b></summary>
<pre>
"pedroalves90@gmail.com"
</pre>
</details>

<br>

**Faz a validação de emails**

```
social-toolkit-gamma.vercel.app/api/email/verify/{email}
```

<details>
  <summary><b>Possíveis retornos:</b></summary>
<pre>
false - Se não for um email
true - Se for um email
</pre>
</details>