using System;
using System.Collections.Generic;
using System.Text;

namespace Util
{
    class Console
    {
        static public string Ask(string question)
        {
            System.Console.Write(question);
            return System.Console.ReadLine();
        }

        static public int AskInt(string question)
        {
            try
            {
                System.Console.Write(question);
                return int.Parse(System.Console.ReadLine());
            }
            catch (Exception)
            {
                throw new FormatException("Input was not a number");
            }
        }
    }
}
