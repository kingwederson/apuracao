var chart = JSC.chart('chartDiv', {
    debug: true,
    type: 'organizational down',
    legend_visible: false,
    series: [
      {
        defaultPoint: {
          label: {
            text: '<b>%name</b><br/>%pos',
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
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
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Galdino',
            id: 'galdino',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Marcelinho',
            id: 'marcelinho',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Magninho',
            id: 'magninho',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Cristiano',
            id: 'cristiano',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Amarildo',
            id: 'amarildo',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Leonardo Monteiro',
            id: 'leonardo',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Roberto do Dário',
            id: 'roberto',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Vang Emir',
            id: 'vang',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Lucas S.L.A.',
            id: 'lucas',
            parent: 'transporte',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Vinícius',
            id: 'vinicius',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Marquinho',
            id: 'marquinho',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Titico',
            id: 'titico',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Ronaldo Eugênio',
            id: 'ronaldo',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Maycon',
            id: 'maycon',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Rafael',
            id: 'rafael',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zé Maria',
            id: 'zemaria',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Rhaquel da Sueli',
            id: 'rhaquel',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Bruna da Joana',
            id: 'bruna',
            parent: 'visual',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Taylor',
            id: 'taylor4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Afonso',
            id: 'afonso4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'JJ',
            id: 'jj4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Otávio do Roberto',
            id: 'otavio4',
            parent: 'agito',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Preto',
            id: 'preto5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Rodriguinho',
            id: 'rodriguinho5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zé Geraldo',
            id: 'zegeraldo5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Toninho',
            id: 'toninho5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Helton',
            id: 'helton5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Ronaldo do Rosendo',
            id: 'ronaldorosendo5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Mateus Barretão',
            id: 'barretao5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Marquinho Eletricista',
            id: 'marquinhoeletricista5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'André',
            id: 'andre5',
            parent: 'som',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Magda',
            id: 'magda6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Simone',
            id: 'simone6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Dora',
            id: 'dora6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Dayane',
            id: 'dayane6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Adriana Macedo',
            id: 'adrianamacedo6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Adriana Rola',
            id: 'adrianarola6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Cristina Alexandre',
            id: 'cristinaalexandre6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Bianca',
            id: 'bianca6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Leidijane',
            id: 'leidijane6',
            parent: 'ornamento',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Carlos Hamilton',
            id: 'carloshamilton7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Giovânia',
            id: 'giovania7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Cristina Alexandre',
            id: 'cristinaalexandre7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Maria Clara',
            id: 'mariaclara7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Dedé',
            id: 'dede7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Magda',
            id: 'magda7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Marcinho',
            id: 'marcinho7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Antônio Ilco',
            id: 'antonioilco7',
            parent: 'marketing',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Antônio Ilco',
            id: 'antonioilco8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Tão',
            id: 'tao8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Carlos Maciel',
            id: 'carlosmaciel8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Viviane',
            id: 'viviane8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Betinho',
            id: 'betinho8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Raimundo',
            id: 'raimundo8',
            parent: 'buscadores',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Dora',
            id: 'dora9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Inês',
            id: 'ines9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Rosilda',
            id: 'Rosilda9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Adriana Rola',
            id: 'adrianarola9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Simone',
            id: 'simone9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Toninho',
            id: 'toninho9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zé Geraldo',
            id: 'zegeraldo9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Priscila',
            id: 'priscila9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Flávio Rola',
            id: 'flaviorola9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Maria Luana',
            id: 'marialuana9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Sandra Alves',
            id: 'sandraalves9',
            parent: 'comite',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Zequinha',
            id: 'zequinha10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Mazinho',
            id: 'mazinho10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Flávio Rola',
            id: 'flaviorola10',
            parent: 'ronda',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Raimundo',
            id: 'raimundo11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Carla',
            id: 'carla11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Rosilda',
            id: 'rosilda11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
            }
          },
          {
            name: 'Maryna',
            id: 'maryna11',
            parent: 'financas',
            attributes: {
              pos: 'Associado',
              telefone: 'XXXX-XXXX'
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