import React, { Component } from "react";
import classes from "./css/blogs.module.css";
import { Prism as SynHigh } from "react-syntax-highlighter";
import Markdown from "react-markdown";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

class Blogs extends Component {
  render() {
    return (
      <div className={classes.mainDiv}>
        <div className={classes.articleDiv}>
          <Rust/>
        </div>
        <div className={classes.articleDiv}>
          <Cipher/>
        </div>
      </div>
    );
  }
}
export default Blogs;
function Rust() {
  var Type =
    `pub enum Type{
      Digits,
      Identifier,
      Plus,
      Minus,
      Divide,
      LeftParenthesis,
      RightParenthesis,
      Equals,
      Multiply,
      SemiColon,
      NewLine
    }`;
  var ImplType =
    `impl Type {
      //this might be a little redundant as you can do the same thing with some regex, but ehh
      pub fn match_type(a_type: Option<Type>) -> String {
        match a_type {
          Some(Type::Multiply) => String::from("Multiply"),
          Some(Type::Plus) => String::from("Plus"),
          Some(Type::Minus) => String::from("Minus"),
          Some(Type::LeftParenthesis) => String::from("Parenthesis"),
          Some(Type::RightParenthesis) => String::from("Parenthesis"),
          Some(Type::Divide) => String::from("Divide"),
          Some(Type::Digits) => String::from("Digits"),
          Some(Type::Whoknows) => String::from("who_knows"),
          Some(Type::SemiColon) => String::from("Semi colon"),
          Some(Type::NewLine) => String::from("newline"),
          Some(Type::Identifier) => String::from("Identifier"),
          _=>String:from("Nothing")
        }
      }
    }`;
  var lexStruct = `pub struct Lexer<'a>{
    pub a_value: &'a String
  }`;
  var opExample =
    `fn some_function(some_value: i8)-> Option<i8>{
      let return_val =  if &some_value % 2 == 0{ Some(some_value+100)} else {None};
      return return_val
    }`;
  var lifeTime = `
  struct Example<'a>{
    value: &'a i32 //here life time a is explicitly defined
                  // meaning that rust compiler by default assigns lifetime if not explicitly defined
  }
  fn main(){
    let y; //y is in scope from here
    {
      let example_value = Example{x :20}//example_value is in scope 
      y =   &example_value.x   
    } //the example_value goes out of scope here so THIS CODE WILL ERROR, what this means is
      //the scope of example_value is shorter than y for it to be borrowed. 
    println("{}",y)
  }//y is out of scope here.
  `;
  var lexerImpl = `impl<'a> Lexer<'a> {
    pub fn get_token_queue(&self) -> VecDeque<String> {
        /*
         *The follwing function takes in string tokenizes them(seperating by whitespace) and returns token in fifo fashion
         */
        let string_to_break = self.a_value.split_whitespace();
        
        let mut token_queue: VecDeque<String> = VecDeque::new();
        for token in string_to_break {
            let mut i_string = String::new();
            let char_vec: Vec<char> = token.chars().collect();
            let rem_v = char_vec.clone();
            let reg_id = Regex::new(r"[a-zA-Z]").unwrap();
            let digi_id = Regex::new(r"\d").unwrap();
            for charcter in rem_v.iter() {
                if reg_id.is_match(&charcter.to_string()) || digi_id.is_match(&charcter.to_string()) 
                {
                    i_string.push(*charcter);
                } 
                else {
                    if i_string != ""{
                        token_queue.push_back(i_string.clone());
                    }
                    while !i_string.is_empty() {
                        i_string.remove(i_string.len() - 1);
                    }
                    token_queue.push_back(charcter.to_string());
                }
            }
            token_queue.push_back(i_string);
        }
        token_queue
    }
    pub fn matches_digit_and_id(a_string: &str) -> Option<Type> {
        /*
        Function that matches the string to either digits or identifier
        ____________________
        Parameter:
            a_string : &str
        ____________________
        Return:
            Some(Type) | None
        */
        let digit_regex = Regex::new(r"^\d+$").unwrap();
        let identifier_regex = Regex::new(r"^[a-zA-Z]+[0-9]*").unwrap();
        // dbg!(a_string);
        if digit_regex.is_match(a_string) {
            return Some(Type::Digits);
        } else if identifier_regex.is_match(a_string) {
            return Some(Type::Identifier);
        } else {
            return None;
        }
    }
    pub fn return_type(some_string: String) -> Option<Type> {
        /*
        Function return Type of the given string
        ____________________
        Parameter:
            some_string : String
        ____________________
        Return:
            Type
        */
        match some_string.as_str() {
            "*" => Some(Type::Multiply),
            "+" => Some(Type::Plus),
            "-" => Some(Type::Minus),
            "(" => Some(Type::LeftParenthesis),
            ")" => Some(Type::RightParenthesis),
            "/" => Some(Type::Divide),
            ";" => Some(Type::SemiColon),
            "=" => Some(Type::Equals),
            "\\n" => Some(Type::NewLine),
            _ => Lexer::matches_digit_and_id(some_string.as_str()),
        }
    }

    pub fn token_return(&self, token_q: &mut VecDeque<String>) -> Option<String> {
        /*
        Function returns a string to use in the interpreter untill the queue is empty, return None if empty
                ____________________
        Parameter:
            token_q : VecDeque(must be mutable)
        ____________________
        Return:
            Type: Some(String)|None
        */

        if !token_q.is_empty() {
            let b = token_q.pop_front();
            return b;
        } else {
            return None;
        }
    }
}`;
  return (
    <div>
      <article>
        <header>
          <h1>
            Designing an interpreter based simple language (and also learning a
            little rust)
          </h1>
          <p className={classes.date}>
            <span>Jan 20 2020</span>
          </p>
        </header>
        <img
          src={"blogs/nano.png"}
          style={{
            position: "relative",
            width: "60%",
            height: "60%",
            borderRadius: "10%",
            leftPadding: "10%",
            alignContent: "center",
            objectPosition: "50% 50%",
          }}
        ></img>
        <p className={classes.mainPara}>
          &emsp; <a href="https://github.com/sgr2848/nolang">This project</a>{" "}
          started out as an assignment for on of my class, which was to write a
          simple <a href="#lexer">lexer</a> in the language of your choosing,
          and as a person who impulsively likes to impose himself to difficult
          situation, I chose Rust, A language in which I had very little(tbh
          almost none) prior experience and is notorious for its steep learning
          curve.
        </p>
        <img
          src={"blogs/anyways.gif"}
          style={{
            position: "relative",
            width: "20%",
            height: "20%",
            borderRadius: "10%",
            leftPadding: "10%",
            alignContent: "right",
          }}
        ></img>
        <p className={classes.mainPara}>
          &emsp;I believe that the best way to grasp new concept or language,
          build something using it instead of just following some tutorial .The
          following professional looking diagram shows how the code will work.
        </p>
        <img
          src={"blogs/profDiagram.png"}
          style={{
            position: "relative",
            width: "70%",
            height: "60%",
            leftPadding: "10%",
            alignContent: "right",
          }}
        ></img>
        <br />
        <p className={classes.mainPara}>
          The code is sectioned into two components
          <ul>
            <li id="lexer">
              <b>Lexer</b>
              <p className={classes.pPara}>
                &emsp;A lexer is a program that breaks down the input into
                sequence of token(object like keyword, id, number or operator)
                and lexemes(types like string or int and what not). It is also
                known as tokenizer or lexical analyzer. <br />
                &emsp; My approach to making token was first to make types of
                token that I would be working with like number, identifier,plus,
                minus and all that and to incorparte all that as a data type I
                made an enum of Type, so an enums in rust are similar to those
                in C but more beefy, picture an enum that has taken a bunch of
                steroids and can do things that the regular enums can't(
                <a href="https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html">
                  if you want to know some more about it
                </a>
                ). Basically its a self defined data type{" "}
                <SynHigh
                  language={"rust"}
                  plugins={["line-numbers"]}
                  style={atomOneDark}
                >
                  {Type}
                </SynHigh>{" "}
                well the example above is a trivial one but what I found really
                cool with rust was that you could write pattern matching
                functions(or method) using powerful match function in rust like
                this one. <br />{" "}
                <SynHigh language={"rust"} showLineNumbers style={atomOneDark}>
                  {ImplType}
                </SynHigh>
                <b>impl</b> in rust is its solution for being object oriented,
                even though it is not one of its paradigm( concurrent,
                functional, generic, imperative, structured if you are curious
                ). Also as you can see the syntax itself is very declarative
                which seemed very tedious to me at first as I was working
                primarily with python and that sort of high level languages,
                however I soon became very thankful for this when I started to
                debug the code, also I started using such declarative typing in
                python as much as possible
                <a href="https://docs.python.org/3/library/typing.html">
                  (Even though its not built-in there is a std library, if you
                  are interested here is the for such declarative typing in
                  python[version > 3.5])
                </a>
                ,That is the gist of the Type enum. A little more information
                about Rust, it is know for it being safe, <b>Option</b> is one
                of those steps(or features I guess) taken to make the language
                safer, I belive this to be a great thing and wish every language
                had it.But back to the point, as the Option as the name suggests is an enum
                that has two return options either <b>Some(value)</b> or{" "}
                <b>None</b>, This means there will always be some value that is
                returned,so no more null pointer errors and seg faults. The code
                beneath shows you how this can be implemented
                <SynHigh language={"rust"} style={atomOneDark}>
                  {opExample}
                </SynHigh>
                Anyways Onwards!!! <br />
                Then we can go into the actual Lexer structure. By making a
                structure of Lexer, like this
                <SynHigh
                  plugins={["line-numbers"]}
                  language={"rust"}
                  style={atomOneDark}
                >
                  {lexStruct}
                </SynHigh>
                What the code above says is that Lexer is a structure that takes
                input as string with certain lifetime <b>'a</b>. Its is
                another on of the safety features of rust. Lifetimes is another
                counter measure to avoid null pointers/dangling pointers. Simply
                put, its specifies the scope in which the the reference or the variable is valid
              .
                <SynHigh
                  plugins={["line-numbers"]}
                  language={"rust"}
                  style={atomOneDark}
                >
                  {lifeTime}
                </SynHigh>
                Now towards the meat of lexer. The Lexer will utilizes regular expression and data structures like deque(double ended queue is variation of queue(more like combination of queue and stack)),                  <SynHigh language={"rust"} style={atomOneDark}>
                  {lexerImpl}
                </SynHigh>
                Lexer's main function is to break down the given string and return token in some form. The function <b>get_token_queue</b> does just that, it takes in string(defined when the Lexer is initialized) and gives out an queue with token. The function first splits the string in whitespaces(spaces) then iterate over them and uses regex to match it they are 
              </p>
            </li>
            <li>Interpreter</li>
          </ul>
        </p>
      </article>
    </div>
  );
}
function Cipher() {
  return (
    <div>
      <article>
        <header>
          <h1>Man's Desire To Hide Information</h1>
          <p className={classes.date}>
            <span>Jan 20 2020</span>
          </p>
        </header>
        {/* <img
              src={"blogs/nano.png"}
              style={{
                position: "relative",
                width: "60%",
                height: "60%",
                borderRadius: "10%",
                leftPadding: "10%",
                alignContent: "center",
              }}
            ></img> */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          laboriosam exercitationem voluptatem, sint molestiae tempore autem
          repudiandae quam, ratione, magnam tempora harum commodi alias!
          Pariatur molestiae officiis ad tempora exercitationem!
        </p>
      </article>
    </div>
  );
}
