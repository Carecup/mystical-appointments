import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles, Calculator, Scroll, Cards } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Биоэнергетика",
      services: [
        {
          title: "Расстановки по Хеленгеру",
          description: "Глубокая работа с семейной системой для разрешения личных и семейных проблем.",
          price: "4 999₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Диагностика энергополя",
          description: "Комплексный анализ вашего энергетического состояния.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Чистка энергополя",
          description: "Глубокая энергетическая чистка для восстановления баланса.",
          price: "от 10 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Постановка защиты",
          description: "Создание надежной энергетической защиты.",
          price: "7 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Терапия",
          description: "Индивидуальная терапевтическая работа.",
          price: "от 5 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Чтение хроник «Акаши»",
          description: "Доступ к информационному полю для получения глубинных знаний.",
          price: "8 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        },
        {
          title: "Работа с родом",
          description: "Глубинная работа с родовыми программами и паттернами.",
          price: "10 000₽",
          duration: "1 сеанс",
          icon: <Sparkles className="w-full h-full" />,
        }
      ]
    },
    {
      title: "Цифровая психология",
      services: [
        {
          title: "Расчет предназначения",
          description: "Определение вашего жизненного пути и предназначения.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        },
        {
          title: "Расчет финансового треугольника",
          description: "Анализ «в чем твои большие деньги».",
          price: "2 500₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        },
        {
          title: "Расчет банковского счета и номера телефона",
          description: "Нумерологический анализ важных чисел.",
          price: "1 500₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        },
        {
          title: "Расчет места жительства",
          description: "Подбор подходящего места жительства.",
          price: "1 500₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        },
        {
          title: "Расчет даты свадьбы",
          description: "Подбор благоприятной даты для свадьбы.",
          price: "1 500₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        },
        {
          title: "Нумерологический прогноз на год",
          description: "Детальный анализ предстоящего года.",
          price: "2 500₽",
          duration: "1 сеанс",
          icon: <Calculator className="w-full h-full" />,
        }
      ]
    },
    {
      title: "Магия рун",
      services: [
        {
          title: "Расклад трио",
          description: "Анализ прошлого, настоящего, будущего.",
          price: "1 500₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        },
        {
          title: "9 рунный расклад",
          description: "Подробный разбор любого вопроса.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        },
        {
          title: "Рунический став «финансы»",
          description: "Мощный рунический став для привлечения финансового благополучия.",
          price: "10 000₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        },
        {
          title: "Рунический став отношения",
          description: "Гармонизация и улучшение отношений.",
          price: "5 000₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        },
        {
          title: "Рунический став защита",
          description: "Создание мощной рунической защиты.",
          price: "7 000₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        },
        {
          title: "Приворотный став",
          description: "Сильнейший рунический приворот.",
          price: "15 000₽",
          duration: "1 сеанс",
          icon: <Scroll className="w-full h-full" />,
        }
      ]
    },
    {
      title: "Магия таро",
      services: [
        {
          title: "Расклад триплет",
          description: "Быстрый и точный ответ на ваш вопрос.",
          price: "1 500₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Таро прогноз на год",
          description: "Подробный прогноз по 4 сферам с картой совета на каждый месяц.",
          price: "10 000₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Расклад выбор",
          description: "Помощь в принятии важных решений.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Таро расклад на три месяца",
          description: "Детальный прогноз на ближайший квартал.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Таро расклад на отношения",
          description: "Глубокий анализ отношений.",
          price: "2 500₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Таро расклад на финансы",
          description: "Анализ финансовых перспектив.",
          price: "3 000₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        },
        {
          title: "Расклад на один вопрос",
          description: "Подробный ответ на любой вопрос.",
          price: "1 700₽",
          duration: "1 сеанс",
          icon: <Cards className="w-full h-full" />,
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-center gold-glow">Наши Услуги</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Выберите услугу, которая поможет вам найти ответы на ваши вопросы и достичь гармонии
        </p>
        
        {serviceCategories.map((category, index) => (
          <div key={category.title} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center gold-glow">{category.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;