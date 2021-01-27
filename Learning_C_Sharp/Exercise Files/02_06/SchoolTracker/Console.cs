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
    }
}
