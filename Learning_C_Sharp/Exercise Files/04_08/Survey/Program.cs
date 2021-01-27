using System;

namespace Survey
{
    class Data
    {
        public string Name;
        public int Age;
        public string Month;

        public void Display()
        {
            Console.WriteLine("Your name is: {0}", Name);
            Console.WriteLine("Your age is: {0}", Age);
            Console.WriteLine("Your birth month is: {0}", Month);

            if (Month == "march")
            {
                Console.WriteLine("you are an Aries.");
            }
            else if (Month == "april")
            {
                Console.WriteLine("you are a Taurus.");
            }
            else if (Month == "may")
            {
                Console.WriteLine("you are a Gemini.");
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var data = new Data();

            Console.WriteLine("What is your name?");
            data.Name = TryAnswer();

            Console.WriteLine("What is your age?");
            data.Age = int.Parse(TryAnswer());

            Console.WriteLine("What month were you born in?");
            data.Month = TryAnswer();

            data.Display();
        }

        static string TryAnswer()
        {
            var question = Console.ReadLine();
            if (question == "")
            {
                Console.WriteLine("You didn't type anything, please try again:");
                return Console.ReadLine();
            }
            return question;
        }
    }
}
