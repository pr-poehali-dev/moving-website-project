import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы перезвоним вам в течение 15 минут.');
    setFormData({ name: '', phone: '', date: '', comment: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen smooth-scroll">
      <a 
        href="tel:+79785570293" 
        className="fixed top-24 right-4 bg-primary text-white px-6 py-4 shadow-xl z-50 hover:bg-primary/90 transition-all rounded-lg flex items-center gap-3"
      >
        <Icon name="Phone" size={24} />
        <div>
          <div className="text-xs font-medium opacity-90">КОНТАКТЫ</div>
          <div className="text-lg font-bold">+7 (978) 557-02-93</div>
        </div>
      </a>

      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="TruckIcon" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">ГрузЛидер</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>

          <a href="tel:+79785570293">
            <Button size="lg">
              +7 (978) 557-02-93
            </Button>
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20" style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/7cda8723-4f56-4794-aa32-11debe2a46de/files/3e34d46a-d339-42df-852a-e7a50c9c2a1e.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Профессиональные грузоперевозки<br />и квартирные переезды
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Быстро, бережно, надёжно — ваш груз в надёжных руках
          </p>
          <a href="tel:+79785570293">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              +7 (978) 557-02-93
            </Button>
          </a>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему выбирают нас?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Опыт более 10 лет</h3>
                <p className="text-muted-foreground">Тысячи успешных переездов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Страховка груза</h3>
                <p className="text-muted-foreground">Полная ответственность за сохранность</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Собственный автопарк</h3>
                <p className="text-muted-foreground">Всегда есть свободный транспорт</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Опытные грузчики</h3>
                <p className="text-muted-foreground">Вежливые и профессиональные</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/projects/7cda8723-4f56-4794-aa32-11debe2a46de/files/07d63966-f41f-4a0c-b281-2665d109cc96.jpg" 
              alt="Наша команда" 
              className="rounded-lg shadow-xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Что мы предлагаем</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8 flex gap-6">
                <Icon name="Home" size={48} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Квартирные переезды</h3>
                  <p className="text-muted-foreground">Включая разборку и сборку мебели, упаковку вещей</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 flex gap-6">
                <Icon name="Building2" size={48} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Офисные переезды</h3>
                  <p className="text-muted-foreground">Быстрый переезд офиса с минимальным простоем</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 flex gap-6">
                <Icon name="Truck" size={48} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Грузоперевозки</h3>
                  <p className="text-muted-foreground">По городу и области, любые габариты груза</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 flex gap-6">
                <Icon name="ArrowUp" size={48} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Подъем грузов</h3>
                  <p className="text-muted-foreground">На любой этаж, включая габаритную мебель</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/projects/7cda8723-4f56-4794-aa32-11debe2a46de/files/5c012d6f-e02f-4ed3-b9ea-64558bbbf5a4.jpg" 
              alt="Наш транспорт" 
              className="rounded-lg shadow-xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Стоимость услуг</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <table className="w-full">
              <tbody className="divide-y">
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="p-6 font-semibold">Квартирный переезд (1-комнатная квартира)</td>
                  <td className="p-6 text-right text-xl font-bold text-primary">от 8 000 ₽</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="p-6 font-semibold">Офисный переезд (до 10 рабочих мест)</td>
                  <td className="p-6 text-right text-xl font-bold text-primary">от 15 000 ₽</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="p-6 font-semibold">Грузоперевозка (до 1 тонны)</td>
                  <td className="p-6 text-right text-xl font-bold text-primary">от 2 500 ₽</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="p-6 font-semibold">Дополнительные грузчики (за час)</td>
                  <td className="p-6 text-right text-xl font-bold text-primary">600 ₽/час</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground text-lg">
            * Точная стоимость зависит от объёма и расстояния
          </p>
        </div>
      </section>

      <section id="order" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Закажите переезд прямо сейчас!</h2>
          
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Дата переезда</label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Комментарий</label>
                  <Textarea 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    placeholder="Расскажите подробнее о переезде..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Мы перезвоним в течение 15 минут
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contacts" className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="TruckIcon" size={28} />
                ГрузЛидер
              </h3>
              <p className="text-white/80">
                Надёжный партнёр для вашего переезда с 2013 года
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="flex-shrink-0 mt-1" />
                  <span className="text-white/90">г. Москва, ул. Логистическая, д. 15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="flex-shrink-0" />
                  <a href="tel:+79785570293" className="text-white/90 hover:text-white">+7 (978) 557-02-93</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="flex-shrink-0" />
                  <a href="mailto:info@gruzlider.ru" className="text-white/90 hover:text-white">info@gruzlider.ru</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Icon name="MessageCircle" size={32} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Icon name="Send" size={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 ГрузЛидер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;