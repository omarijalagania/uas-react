/* This example requires Tailwind CSS v2.0+ */
import {
  HandIcon,
  TagIcon,
  ShareIcon,
  ExclamationIcon,
  ArchiveIcon,
  MapIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "უსაფრთხოების წესები",
    description:
      "გთხოვთ ფრენის დაწყებამდე გაეცნოთ საქართველოში მოქმედ შესაბამის უსაფრთხოების წესებს.",
    icon: HandIcon,
  },
  {
    name: "მარკირება",
    description:
      "მარკირება უნდა განთავსდეს ხომალდის კონსტრუქციის გარე ზედაპირზე ადვილად შესამჩნევ ადგილას.",
    icon: TagIcon,
  },
  {
    name: "საჯარო ღონისძიებები",
    description:
      "ხალხის თავშეყრის ადგილის თავზე და მის სიახლოვეს ექსპლუატაცია ნებადართულია მხოლოდ სააგენტოს მიერ გაცემული ავტორიზაციის ან სერტიფიკატის ფარგლებში.",
    icon: ShareIcon,
  },
  {
    name: "ფრენისთვის აკრძალული და შეზღუდული არეები",
    description:
      "ექსპლუატაცია ფრენისთვის აკრძალულ და შეზღუდულ არეებში ნებადართულია მხოლოდ ავტორიზაციის ფარგლებში. აღნიშნული არეების სანახავად გთხოვთ გადახვიდეთ შემდეგ მისამართზე airspace.gov.ge",
    icon: ExclamationIcon,
  },
  {
    name: "ექსპლუატაციის კატეგორიები",
    description:
      "უპილოტო საჰაერო ხომალდის სისტემის ექსპლუატაციის კატეგორიებია: ღია, სპეციფიკური და სერტიფიცირებული. დეტალური ინფორმაციის სანახავად გთხოვთ ეწვიეთ ვებ-გვერდს GCAA web page .",
    icon: ArchiveIcon,
  },
  {
    name: "აპლიკაცია",
    description:
      "“უახლოვეს მომავალში უპილოტო საჰაერო ხომალდის სისტემის მომხმარებლებისთვის ხელმისაწვდომი იქნება Android & iOS სისტემაზე სპეციალურად შექმნილი აპლიკაცია.",
    icon: MapIcon,
  },
];

export default function Feature() {
  return (
    <div className="py-12 bg-white h-screen">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center m-auto  h-10 w-10">
                  <feature.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg text-center leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-center text-gray-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
