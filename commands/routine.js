// var date = new Date()
// var day = date.getDay()

var isInstrumentaionForB;
const { SlashCommandBuilder } = require ('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('routine')
    .setDescription('displays routine!'),
    async execute(interaction) {
    switch(new Date().getDay())
    {
        case 0:       //sunday
        
        var routineEmbed = {
        color: 0x0099ff,
            title: 'CLASS ROUTINE',
                fields: [
                {
                    name: '11:00- 11:45',
                    value: 'Applied Math-PRP',
                    inline: false,
                },
                {
                    name: '11:45 - 1:00',
                    value: 'Instrumentation-I -MB',
                    inline: false,
                },
                {
                    name: '1:00 - 1:45',
                    value: 'BREAK',
                    inline: true,
                },
                {
                    name: '1:45-2:30',
                    value: 'Applied math -VP',
                    inline: false,
                },
                {
                    name: '2:30 - 4:00',
                    value: 'Numerical Methods- SG',
                    inline: true,
                },
            ],
            timestamp: new Date().toISOString(),
                
        };
        break;
            case 1:    
            var routineEmbed = {
            color: 0x0099ff,
            title: 'MON CLASS ROUTINE',
                fields: [
                {
                    name: '10:15 - 11:55',
                    value: 'COA-SS',
                    inline: false,
                },

                {
                    name: '11:55 - 1:35',
                    value: 'Data-communication-NBA',
                    inline: false,
                },
                {
                    name: '1:35 - 2:25',
                    value: 'BREAK',
                    inline: true,
                },
                {
                    name: '2:25 - 4:55',
                    value: 'data communication || software engineering lab alt',
                    inline: true,
                },
            ],
            timestamp: new Date().toISOString(),
            };
            break;
            case 2:    
            var routineEmbed = {
                color: 0x0099ff,
                title: 'TUE CLASS ROUTINE',
                    fields: [
                    {
                        name: '10:15 - 10:55',
                        value: 'communication english sj',
                        inline: false,
                    },
                    {
                        name: '10:55 - 11:55',
                        value: 'data communication - nba',
                        inline: false,
                    },

                    {
                        name: '11:55 - 1:35',
                        value: 'Prob & stat - kb',
                        inline: false,
                    },
                    {
                        name: '1:35 - 2:25',
                        value: 'BREAK',
                        inline: true,
                    },
                    {
                        name: '1:35-4:55',
                        value: 'Gp - A : communication english Gp - B + vky class : computer graphics',
                        inline: false,
                    },

                ],
                timestamp: new Date().toISOString(),
                };
                break;
                case 3:    
                var routineEmbed = {
                    color: 0x0099ff,
                    title: 'CLASS ROUTINE',
                        fields: [
                        {
                            name: '10:15 - 11:45',
                            value: 'Electric machine - SK',
                            inline: false,
                        },

                        {
                            name: '11:45 - 1:00',
                            value: 'Instrumentation I - MB',
                            inline: false,
                        },
                        {
                            name: '1:00 - 1:45',
                            value: 'BREAK',
                            inline: true,
                        },
                        {
                            name: '1:45-4:00',
                            value: 'Gp - A : Microprocessor Lab \n Gp - B : NM Lab',
                            inline: false,
                        },

                    ],
                    timestamp: new Date().toISOString(),
                    };
                    break;
                    case 4:    
                    var routineEmbed = {
                    color: 0x0099ff,
                        title: 'CLASS ROUTINE',
                            fields: [
                            {
                                name: '10:15 - 11:45',
                                value: 'Electrical Machine - SK',
                                inline: false,
                            },

                            {
                                name: '11:45 - 12:30',
                                value: 'Discrete Structure - LNR',
                                inline: false,
                            },
                            {
                                name: '12:30 - 1:00',
                                value: 'BREAK',
                                inline: true,
                            },
                            {
                                name: '1:00-1:45',
                                value: 'DSA - BS',
                                inline: false,
                            },
                            {
                                name: '1:45 - 4:00',
                            
                                value: 'ALT LABS Electrical Machines & Instrumentation',
                                inline: true,
                            },
                        ],
                        timestamp: new Date().toISOString(),
                        };
                        break;
                    case 5:
                        var routineEmbed = {
                            color: 0x0099ff,
                            title: 'Thurs CLASS ROUTINE',
                                fields: [
                                {
                                    name: '10:15 - 11:00',
                                    value: 'Numerical Methods - JRS',
                                    inline: false,
                                },
                                {
                                    name: '11:00 - 12:30',
                                    value: 'Microprocessor - DSB',
                                    inline: false,
                                },

                                {
                                    name: '12:30-1:00',
                                    value: 'BREAK',
                                    inline: true,
                                },
                                {
                                    name: '1:00-1:45',
                                    value: 'Applied Math - PRP',
                                    inline: false,
                                },
                                {
                                    name: '1:45 - 4:00',
                                    value: 'Group A - Micro Lab \n Group B - XUTTI',
                                    inline: true,
                                },
                            ],
                            timestamp: new Date().toISOString(),
                        };
                        break;
            default:
                var routineEmbed = {
                    color: 0x0099ff,
                    title: 'CLASS ROUTINE',
                        fields: [
                        {
                            name: 'XUTTII',
                            value: '',
                            inline: false,
                        }
            
                    ],
                    timestamp: new Date().toISOString(),
                };
    };

        await interaction.reply({ embeds: [routineEmbed] })
    },
}

