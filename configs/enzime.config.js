const { shallow, render, mount } = require( 'enzyme');
const enzyme  = require( 'enzyme');
const Adapter  = require( 'enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// Глобальный доступ во всех файлах тестов без необходимости импорта.
global.shallow = shallow;
global.render = render;
global.mount = mount;

// При ошибке роняем тест
console.error = (message) => {
    throw new Error(message);
};
