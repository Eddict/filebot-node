Ext.define('FileBot.store.Languages', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.languages',
    storeId: 'languages',

    fields: [
        'id', 'iso_639_1', 'iso_639_3', 'iso_639_2B', 'label'
    ],

    data: [
		[ 1, 'sq', 'sqi', 'alb', 'Albanian'],
		[ 2, 'ar', 'ara', 'ara', 'Arabic'],
		[ 3, 'hy', 'hye', 'arm', 'Armenian'],
		[ 4, 'pb', 'pob', 'pob', 'Brazilian'],
		[ 5, 'bg', 'bul', 'bul', 'Bulgarian'],
		[ 6, 'ca', 'cat', 'cat', 'Catalan'],
		[ 7, 'zh', 'zho', 'chi', 'Chinese'],
		[ 8, 'hr', 'hrv', 'hrv', 'Croatian'],
		[ 9, 'cs', 'ces', 'cze', 'Czech'],
		[10, 'da', 'dan', 'dan', 'Danish'],
		[11, 'nl', 'nld', 'dut', 'Dutch'],
		[12, 'en', 'eng', 'eng', 'English'],
		[13, 'et', 'est', 'est', 'Estonian'],
		[14, 'fi', 'fin', 'fin', 'Finnish'],
		[15, 'fr', 'fra', 'fre', 'French'],
		[16, 'de', 'deu', 'ger', 'German'],
		[17, 'el', 'ell', 'gre', 'Greek'],
		[18, 'he', 'heb', 'heb', 'Hebrew'],
		[19, 'hi', 'hin', 'hin', 'Hindi'],
		[20, 'hu', 'hun', 'hun', 'Hungarian'],
		[21, 'id', 'ind', 'ind', 'Indonesian'],
		[22, 'it', 'ita', 'ita', 'Italian'],
		[23, 'ja', 'jpn', 'jpn', 'Japanese'],
		[24, 'ko', 'kor', 'kor', 'Korean'],
		[25, 'lv', 'lav', 'lav', 'Latvian'],
		[26, 'lt', 'lit', 'lit', 'Lithuanian'],
		[27, 'mk', 'mkd', 'mac', 'Macedonian'],
		[28, 'ms', 'msa', 'may', 'Malay'],
		[29, 'no', 'nor', 'nor', 'Norwegian'],
		[30, 'fa', 'fas', 'per', 'Persian'],
		[31, 'pl', 'pol', 'pol', 'Polish'],
		[32, 'pt', 'por', 'por', 'Portuguese'],
		[33, 'ro', 'ron', 'rum', 'Romanian'],
		[34, 'ru', 'rus', 'rus', 'Russian'],
		[35, 'sr', 'srp', 'srp', 'Serbian'],
		[36, 'sk', 'slk', 'slo', 'Slovak'],
		[37, 'sl', 'slv', 'slv', 'Slovenian'],
		[38, 'es', 'spa', 'spa', 'Spanish'],
		[39, 'sv', 'swe', 'swe', 'Swedish'],
		[40, 'th', 'tha', 'tha', 'Thai'],
		[41, 'tr', 'tur', 'tur', 'Turkish'],
		[42, 'vi', 'vie', 'vie', 'Vietnamese']
    ]
});