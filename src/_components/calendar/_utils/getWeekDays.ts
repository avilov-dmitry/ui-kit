export const getWeekDays = (lang: 'ru' | 'en') => {
  const days = {
    ru: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  };

  return days[lang];
};
