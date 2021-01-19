import sys, getopt

if __name__ == '__main__':
    # Parsing argument
    NUM_WORDS = sys.argv[1]
    EXCLUDE_WORDS = sys.argv[2:]

    print (f"Print total {NUM_WORDS} words")
    print (f"Words that are excluded: {EXCLUDE_WORDS}")
