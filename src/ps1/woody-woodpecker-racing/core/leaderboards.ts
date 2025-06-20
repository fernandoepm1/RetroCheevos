import { AchievementSet, define as $ } from '@cruncheevos/core';

const addLeaderboards = (set: AchievementSet) => {
    set.addLeaderboard({
        title: 'Speed Demon: Brazil',
        description: 'Fastest total time for Brazil track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 0],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 125224,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Woody Glen',
        description: 'Fastest total time for Woody Glen track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 3],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '16bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '16bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129807,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Death Valley',
        description: 'Fastest total time for Death Valley track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 6],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129872,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Quarry',
        description: 'Fastest total time for Quarry track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 9],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129873,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Italy',
        description: 'Fastest total time for Italy track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 1],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129874,
    })

    set.addLeaderboard({
        title: `Speed Demon: Meany's Motorsports`,
        description: `Fastest total time for Meany's Motorsports track in Time Trial mode`,
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 4],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129875,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Sawmill',
        description: 'Fastest total time for Sawmill track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 7],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129876,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Junkyard',
        description: 'Fastest total time for Junkyard track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 10],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129877,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Japan',
        description: 'Fastest total time for Japan track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129878,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Chilly International',
        description:
            'Fastest total time for Chilly International track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 5],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129879,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Pebble Bay',
        description: 'Fastest total time for Pebble Bay track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 8],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129880,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Barnyard',
        description: 'Fastest total time for Barnyard track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 11],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129881,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Loch Ness',
        description: 'Fastest total time for Loch Ness track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 13],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129882,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Steelworks',
        description: 'Fastest total time for Steelworks track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 12],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129883,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Space Speedway',
        description: 'Fastest total time for Space Speedway track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 15],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129884,
    })

    set.addLeaderboard({
        title: 'Speed Demon: Vegas Runway',
        description: 'Fastest total time for Vegas Runway track in Time Trial mode',
        lowerIsBetter: true,
        type: 'FRAMES',
        conditions: {
            start: $(
                ['', 'Mem', '8bit', 0x846dc, '=', 'Value', '', 1],
                ['', 'Mem', '8bit', 0x84700, '=', 'Value', '', 3],
                ['', 'Mem', '8bit', 0x846de, '=', 'Value', '', 14],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 255],
                ['', 'Delta', '32bit', 0x860ac, '=', 'Value', '', 0],
                ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 1],
            ),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: $(
                    ['', 'Delta', '8bit', 0x8af7f, '=', 'Value', '', 0],
                    ['', 'Mem', '8bit', 0x8af7f, '=', 'Value', '', 1],
                ),
                alt2: $(
                    ['', 'Delta', '32bit', 0x860ac, '!=', 'Value', '', 0],
                    ['', 'Mem', '32bit', 0x860ac, '=', 'Value', '', 0],
                ),
            },
            submit: $(
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Delta', '8bit', 0x396, '=', 'Value', '', 2],
                ['AddAddress', 'Mem', '24bit', 0x8501c],
                ['', 'Mem', '8bit', 0x396, '=', 'Value', '', 3],
            ),
            value: $(
                ['AddSource', 'Mem', '32bit', 0x860ac, '*', 'Float', '', 2],
                ['SubSource', 'Value', '', 4],
                ['Measured', 'Value', '', 0],
            ),
        },
        id: 129885,
    });
};

export default addLeaderboards;
