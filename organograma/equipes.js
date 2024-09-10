var tel = {
  adrianarola: '984-185-497',
  adrianamacedo: '984-099-431',
  afonso: '984-701-132',
  amarildo: '999-242-901',
  andre: '984-436-255',
  antonio: '984-188-849',
  barretao: '984-690-241',
  betinho: '984-964-833',
  bianca: '984-436-560',
  bruna: '999-722-948',
  carla: '984-326-655',
  carloshamilton: '',
  carlosmaciel: '984-007-703',
  cidinho: '984-065-542',
  cristiano: '998-100-351',
  cristina: '984-336-535',
  dayane: '984-879-810',
  dede: '999-185-541',
  dora: '984-532-653',
  flavio: '984-258-282',
  galdino: '999-501-607',
  giovania: '985-066-525',
  ines: '984-232-128',
  helton: '984-140-600',
  laercio: '984-691-583',
  leonardo: '',
  leidijane: '984-215-105',
  lucas: '998-479-116',
  jj: '998-627-265',
  magda: '984-227-049',
  marcelinho: '984-191-971',
  marcinho: '984-215-156',
  mariaclara: '984-520-492',
  marialuana: '',
  maryna: '984-224-781',
  magninho: '',
  marquinho: '984-314-145',
  marquinhoeletricista: '',
  maycon: '985-089-004',
  mazinho: '998-044-186',
  preto: '984-689-960',
  priscila: '(22) 999-162-366',
  rafael: '984-980-726',
  raimundo: '984-009-726',
  rhaquel: '999-070-842',
  roberto: '984-689-350',
  rodriguinho: '984-772-020',
  ronaldo: '985-016-782',
  ronaldorosendo: '984-069-820',
  rosilda: '984-026-530',
  sandra: '',
  simone: '984-261-248',
  otavio: '',
  tao: '984-632-044',
  taylor: '999-085-163',
  titico: '984-957-457',
  toninho: '984-314-070',
  vang: '999-315-597',
  vinicius: '984-934-547',
  viviane: '985-159-022',
  weverton: '984-033-122',
  zegeraldo: '985-049-848',
  zemaria: '',
  zequinha: '999-440-611'
}
var chart = JSC.chart('chartDiv', {
    debug: true,
    type: 'organizational down',
    legend_visible: false,
    series: [
      {
        defaultPoint: {
          label: {
            text: '<b>%name</b><br/>%pos<br/>%telefone',
            autoWrap: true
          },
          connectorLine_color: '#747c72',
          annotation: {
            padding: 9,
            corners: ['cut', 'square', 'cut', 'square'],
            margin: [15, 5, 10, 0]
          },
          outline: { color: '#73bc6e', width: 2 },
          color: '#dcead7',
          tooltip: '<b>%name</b><br/>%pos<br/>%telefone'
        },
        points: [
          {
            name: 'Comissão Organizadora',
            id: 'co',
            color: 'darkblue',
            label_color: 'white',
            attributes: { pos: 'Cidinho', telefone: 'XXXX-XXXX' }
          },
          {
            name: 'Dora',
            id: 'dora',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.dora
            }
          },
          {
            name: 'Transporte',
            id: 'transporte',
            color: 'darkgreen',
            parent: 'co',
            layout: 'vertical',
            expandable: true,
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zé Geraldo',
            id: 'zegeraldo',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.zegeraldo
            }
          },
          {
            name: 'Visual',
            id: 'visual',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zequinha',
            id: 'zequinha',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.zequinha
            }
          },
          {
            name: 'Agito',
            id: 'agito',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Laercio',
            id: 'laercio',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.laercio
            }
          },
          {
            name: 'Sonoplastia',
            id: 'som',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Cidinho',
            id: 'cidinho',
            color: 'darkblue',
            parent: 'co',
            attributes: {
              pos: 'Líder',
              telefone: tel.cidinho
            }
          },
          {
            name: 'Ornamentação',
            id: 'ornamento',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Toninho',
            id: 'toninho',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.toninho
            }
          },
          {
            name: 'Marketing',
            id: 'marketing',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Raimundo',
            id: 'raimundo',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.raimundo
            }
          },
          {
            name: 'Buscadores',
            id: 'buscadores',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.mazinho
            }
          },
          {
            name: 'Comitê',
            id: 'comite',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Magda',
            id: 'magda',
            parent: 'co',
            attributes: {
              pos: 'Associado',
              telefone: tel.magda
            }
          },
          {
            name: 'Ronda',
            id: 'ronda',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Finanças',
            id: 'financas',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Agenda',
            id: 'agenda',
            color: 'darkgreen',
            parent: 'co',
            attributes: {
              pos: 'Equipe',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zequinha',
            id: 'zequinha2',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.zequinha
            }
          },
          {
            name: 'Galdino',
            id: 'galdino',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.galdino
            }
          },
          {
            name: 'Marcelinho',
            id: 'marcelinho',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.marcelinho
            }
          },
          {
            name: 'Magninho',
            id: 'magninho',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.magninho
            }
          },
          {
            name: 'Cristiano',
            id: 'cristiano',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.cristiano
            }
          },
          {
            name: 'Amarildo',
            id: 'amarildo',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.amarildo
            }
          },
          {
            name: 'Leonardo Monteiro',
            id: 'leonardo',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.leonardo
            }
          },
          {
            name: 'Roberto do Dário',
            id: 'roberto',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.roberto
            }
          },
          {
            name: 'Vang Emir',
            id: 'vang',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.vang
            }
          },
          {
            name: 'Lucas S.L.A.',
            id: 'lucas',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: tel.lucas
            }
          },
          {
            name: 'Vinícius',
            id: 'vinicius',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.vinicius
            }
          },
          {
            name: 'Marquinho',
            id: 'marquinho',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.marquinho
            }
          },
          {
            name: 'Titico',
            id: 'titico',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.titico
            }
          },
          {
            name: 'Ronaldo Eugênio',
            id: 'ronaldo',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.ronaldo
            }
          },
          {
            name: 'Maycon',
            id: 'maycon',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.maycon
            }
          },
          {
            name: 'Rafael',
            id: 'rafael',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.rafael
            }
          },
          {
            name: 'Zé Maria',
            id: 'zemaria',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.zemaria
            }
          },
          {
            name: 'Rhaquel da Sueli',
            id: 'rhaquel',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.rhaquel
            }
          },
          {
            name: 'Bruna da Joana',
            id: 'bruna',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: tel.bruna
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: tel.mazinho
            }
          },
          {
            name: 'Taylor',
            id: 'taylor4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: tel.taylor
            }
          },
          {
            name: 'Afonso',
            id: 'afonso4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: tel.afonso
            }
          },
          {
            name: 'JJ',
            id: 'jj4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: tel.jj
            }
          },
          {
            name: 'Otávio do Roberto',
            id: 'otavio4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: tel.otavio
            }
          },
          {
            name: 'Preto',
            id: 'preto5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.preto
            }
          },
          {
            name: 'Rodriguinho',
            id: 'rodriguinho5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.rodriguinho
            }
          },
          {
            name: 'Zé Geraldo',
            id: 'zegeraldo5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.zegeraldo
            }
          },
          {
            name: 'Toninho',
            id: 'toninho5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.toninho
            }
          },
          {
            name: 'Helton',
            id: 'helton5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.helton
            }
          },
          {
            name: 'Ronaldo do Rosendo',
            id: 'ronaldorosendo5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.ronaldorosendo
            }
          },
          {
            name: 'Mateus Barretão',
            id: 'barretao5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.barretao
            }
          },
          {
            name: 'Marquinho Eletricista',
            id: 'marquinhoeletricista5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.marquinhoeletricista
            }
          },
          {
            name: 'André',
            id: 'andre5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: tel.andre
            }
          },
          {
            name: 'Magda',
            id: 'magda6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.magda
            }
          },
          {
            name: 'Simone',
            id: 'simone6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.simone
            }
          },
          {
            name: 'Dora',
            id: 'dora6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.dora
            }
          },
          {
            name: 'Dayane',
            id: 'dayane6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.dayane
            }
          },
          {
            name: 'Adriana Macedo',
            id: 'adrianamacedo6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.adrianamacedo
            }
          },
          {
            name: 'Adriana Rola',
            id: 'adrianarola6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.adrianarola
            }
          },
          {
            name: 'Cristina Alexandre',
            id: 'cristinaalexandre6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.cristina
            }
          },
          {
            name: 'Bianca',
            id: 'bianca6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.bianca
            }
          },
          {
            name: 'Leidijane',
            id: 'leidijane6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: tel.leidijane
            }
          },
          {
            name: 'Carlos Hamilton',
            id: 'carloshamilton7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.carloshamilton
            }
          },
          {
            name: 'Giovânia',
            id: 'giovania7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.giovania
            }
          },
          {
            name: 'Cristina Alexandre',
            id: 'cristinaalexandre7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.cristina
            }
          },
          {
            name: 'Maria Clara',
            id: 'mariaclara7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.mariaclara
            }
          },
          {
            name: 'Dedé',
            id: 'dede7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.dede
            }
          },
          {
            name: 'Magda',
            id: 'magda7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.magda
            }
          },
          {
            name: 'Marcinho',
            id: 'marcinho7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.marcinho
            }
          },
          {
            name: 'Antônio Ilco',
            id: 'antonioilco7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: tel.antonio
            }
          },
          {
            name: 'Antônio Ilco',
            id: 'antonioilco8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.antonio
            }
          },
          {
            name: 'Tão',
            id: 'tao8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.tao
            }
          },
          {
            name: 'Carlos Maciel',
            id: 'carlosmaciel8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.carlosmaciel
            }
          },
          {
            name: 'Viviane',
            id: 'viviane8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.viviane
            }
          },
          {
            name: 'Betinho',
            id: 'betinho8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.betinho
            }
          },
          {
            name: 'Raimundo',
            id: 'raimundo8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: tel.raimundo
            }
          },
          {
            name: 'Dora',
            id: 'dora9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.dora
            }
          },
          {
            name: 'Inês',
            id: 'ines9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.ines
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.mazinho
            }
          },
          {
            name: 'Rosilda',
            id: 'Rosilda9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.rosilda
            }
          },
          {
            name: 'Adriana Rola',
            id: 'adrianarola9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.adrianarola
            }
          },
          {
            name: 'Simone',
            id: 'simone9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.simone
            }
          },
          {
            name: 'Toninho',
            id: 'toninho9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.toninho
            }
          },
          {
            name: 'Zé Geraldo',
            id: 'zegeraldo9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.zegeraldo
            }
          },
          {
            name: 'Priscila',
            id: 'priscila9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.priscila
            }
          },
          {
            name: 'Flávio Rola',
            id: 'flaviorola9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.flavio
            }
          },
          {
            name: 'Maria Luana',
            id: 'marialuana9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.marialuana
            }
          },
          {
            name: 'Sandra Alves',
            id: 'sandraalves9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: tel.sandra
            }
          },
          {
            name: 'Zequinha',
            id: 'zequinha10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: tel.zequinha
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: tel.mazinho
            }
          },
          {
            name: 'Flávio Rola',
            id: 'flaviorola10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: tel.flavio
            }
          },
          {
            name: 'Raimundo',
            id: 'raimundo11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: tel.raimundo
            }
          },
          {
            name: 'Carla',
            id: 'carla11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: tel.carla
            }
          },
          {
            name: 'Rosilda',
            id: 'rosilda11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: tel.rosilda
            }
          },
          {
            name: 'Maryna',
            id: 'maryna11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: tel.maryna
            }
          }
        ]
      }
    ],
    toolbar: {
      defaultItem: { margin: 5, events_click: orientChart },
      items: {
        Left_icon: 'system/default/zoom/arrow-left',
        Right_icon: 'system/default/zoom/arrow-right',
        Down_icon: 'system/default/zoom/arrow-down',
        Up_icon: 'system/default/zoom/arrow-up'
      }
    }
  });

  function orientChart(direction) {
    chart.options({ type: 'organizational ' + direction });
  }