import { define as $, RichPresence } from '@cruncheevos/core'

const addRichPresence = () => {
    return RichPresence({
        lookupDefaultParameters: { keyFormat: 'hex', compressRanges: true },
        // Wraps calls to RichPresence.format
        format: {
            Score: 'VALUE',
        },
        // Wraps calls to RichPresence.lookup
        lookup: {
            Song: {
                // No need to specify name, it's taken from an object
                values: {
                    '*': 'Unknown value',
                    1: 'Same value',
                    2: 'Same value',
                    3: 'Same value',
                },
                // overrides lookupDefaultParameters.keyFormat
                keyFormat: 'dec',
                defaultAt: '0x100',
            },
            Mode: {
                values: {
                    1: 'Mode 1',
                    2: 'Mode 2',
                },
                // overrides lookupDefaultParameters.compressRanges
                compressRanges: false
            },
        },
        // Callback function that must return an array of display strings.
        // All the previously specified Lookups and Formats are provided
        // through `lookup` and `format` objects respectively,
        // along with the `tag` function to inject lookups into display strings.
        displays: ({ lookup, format, macro, tag }) => [
            [
                $(['', 'Mem', '16bit', 0xcafe, '=', 'Value', '', 1]),

                // Passing lookup.Song to this tagged template literal function causes
                // `lookup.Song.at()` call with previously set `defaultAt` value
                tag`Cafe at value 1, Song: ${lookup.Song}, Mode: ${lookup.Mode.at('0x990')}`,
            ],

            ['0xCAFE=2', tag`Cafe at value 2, format example: ${format.Score.at('0x600')}`],

            // `macro` is an object providing several pre-existing Formats
            ['0xCAFE=3', tag`Default macro test ${macro.Score.at('0xfeed')}`],
            'Playing a good game',
        ],
    });
}


 //    `Format:Score
 // FormatType=VALUE
 //
 // Lookup:Song
 // 1-3=Same value
 // *=Unknown value
 //
 // Lookup:Mode
 // 0x1=Mode 1
 // 0x2=Mode 2
 //
 // Display:
 // ?0x cafe=1?Cafe at value 1, Song: ＠Song(0x100), Mode: ＠Mode(0x990)
 // ?0xCAFE=2?Cafe at value 2, format example: ＠Score(0x600)
 // ?0xCAFE=3?Default macro test @Score(0xfeed)
 // Playing a good game`