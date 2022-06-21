import Link from "next/link";
import React from "react";
import { Card, Table } from "react-bootstrap";
import ColorSwitcher from "../../../../components/ColorSwitcher";

export default function Simple() {
    return (
        <Card>
            <Card.Header>
                <h1>
                    <ColorSwitcher text="Present Simple" />
                </h1>
            </Card.Header>
            <Card.Body>
                <p>
                    The <strong>Present Simple tense</strong> is the most basic
                    tense in English and uses the base form of the verb (except
                    for the verb <em>be</em>). The only change from the base is
                    the addition of <strong>s</strong> for third person
                    singular.
                </p>
                <h2 id="structure">How do we make the Present Simple tense?</h2>
                <p>There are two basic structures for the Present Simple:</p>
                <p>1. Positive sentences</p>
                <Table responsive striped bordered className="ec-table">
                    <tbody>
                        <tr>
                            <td>subject</td>
                            <td>+</td>
                            <td className="bg-accent-3">main verb</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td className="bg-accent-3">
                                <strong>Present Simple</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <p>2. Negative and question sentences</p>
                <Table responsive striped bordered className="ec-table">
                    <tbody>
                        <tr>
                            <td>subject</td>
                            <td>+</td>
                            <td className="bg-accent-1">
                                auxiliary <em>do</em>
                            </td>
                            <td>+</td>
                            <td className="bg-accent-3">main verb</td>
                        </tr>
                        <tr>
                            <td rowSpan="2"></td>
                            <td rowSpan="2"></td>
                            <td className="bg-accent-1">
                                conjugated in Present Simple
                            </td>
                            <td rowSpan="2"></td>
                            <td className="bg-accent-3">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="bg-accent-1">
                                <strong>do, does</strong>
                            </td>
                            <td className="bg-accent-3">
                                <strong>base</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Look at these examples with the main verb <i>like</i>:
                </p>
                <Table responsive striped bordered className="ec-table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <strong>subject</strong>
                            </th>
                            <th className="bg-accent-1">
                                <strong>auxiliary verb</strong>
                            </th>
                            <th>&nbsp;</th>
                            <th className="bg-accent-3">
                                <strong>main verb</strong>
                            </th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="2">+</td>
                            <td>I, you, we, they</td>
                            <td className="bg-accent-1"></td>
                            <td>&nbsp;</td>
                            <td className="bg-accent-3">like</td>
                            <td>coffee.</td>
                        </tr>
                        <tr>
                            <td>He, she, it</td>
                            <td className="bg-accent-1"></td>
                            <td>&nbsp;</td>
                            <td className="bg-accent-3">
                                like<strong>s</strong>
                            </td>
                            <td>coffee.</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">-</td>
                            <td>I, you, we, they</td>
                            <td className="bg-accent-1">do</td>
                            <td>not</td>
                            <td className="bg-accent-3">like</td>
                            <td>coffee.</td>
                        </tr>
                        <tr>
                            <td>He, she, it</td>
                            <td className="bg-accent-1">
                                do<strong>es</strong>
                            </td>
                            <td>not</td>
                            <td className="bg-accent-3">like</td>
                            <td>coffee.</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">?</td>
                            <td className="bg-accent-1">Do</td>
                            <td>I, you, we, they</td>
                            <td>&nbsp;</td>
                            <td className="bg-accent-3">like</td>
                            <td>coffee?</td>
                        </tr>
                        <tr>
                            <td className="bg-accent-1">
                                Do<strong>es</strong>
                            </td>
                            <td>he, she, it</td>
                            <td>&nbsp;</td>
                            <td className="bg-accent-3">like</td>
                            <td>coffee?</td>
                        </tr>
                    </tbody>
                </Table>
                <p>From the above table, notice the following points...</p>
                <p>For positive sentences:</p>
                <ul>
                    <li>
                        There is <strong>no auxiliary verb</strong>.
                    </li>
                    <li>
                        We conjugate the main verb by adding <strong>s</strong>{" "}
                        to the third person singular.
                    </li>
                </ul>
                <p>For negative and question sentences:</p>
                <ul>
                    <li>
                        The auxiliary verb (do) is conjugated in the Present
                        Simple: <em>do, does</em>
                    </li>
                    <li>
                        The main verb is invariable in base form: <em>base</em>
                    </li>
                    <li>
                        For negative sentences, we insert <strong>not</strong>{" "}
                        between the auxiliary verb and the main verb.
                    </li>
                    <li>
                        For question sentences, we <strong>exchange</strong> the
                        subject and the auxiliary verb.
                    </li>
                </ul>
                <div className="ECtip">
                    {" "}
                    <strong>
                        Emphatic <em>do</em>
                    </strong>
                    <br />
                    Normally, for positive sentences we do not use the auxiliary
                    verb <em>do</em>. But if we want to emphasize (stress)
                    something, we may use it. For example, instead of saying "I
                    like your dress", we could say "I do like your dress", just
                    to show how much we like it. Here are some more examples:
                    <ul>
                        <li className="li-compact">I do wish you'd stop.</li>
                        <li className="li-compact">I do apologize.</li>
                        <li className="li-compact">
                            {" "}
                            You do look smart today.
                        </li>
                    </ul>
                </div>
                <h3>
                    Present Simple with main verb <em>be</em>
                </h3>
                <p>
                    The structure of the Present Simple with the main verb{" "}
                    <em>be</em> is:
                </p>
                <Table responsive striped bordered className="ec-table">
                    <tbody>
                        <tr>
                            <td>subject</td>
                            <td>+</td>
                            <td className="bg-accent-3">
                                main verb <em>be</em>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2"></td>
                            <td rowSpan="2"></td>
                            <td className="bg-accent-3">
                                conjugated in Present Simple
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-accent-3">
                                <strong>am, are, is</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Look at these examples with the main verb <i>be</i>:
                </p>
                <Table responsive striped bordered className="ec-table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <strong>subject</strong>
                            </th>
                            <th className="bg-accent-3">
                                <strong>
                                    main verb <em>be</em>
                                </strong>
                            </th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="3">+</td>
                            <td>I</td>
                            <td className="bg-accent-3">am</td>
                            <td>&nbsp;</td>
                            <td>French.</td>
                        </tr>
                        <tr>
                            <td>You, we, they</td>
                            <td className="bg-accent-3">are</td>
                            <td>&nbsp;</td>
                            <td>French.</td>
                        </tr>
                        <tr>
                            <td>He, she, it</td>
                            <td className="bg-accent-3">is</td>
                            <td>&nbsp;</td>
                            <td>French.</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">-</td>
                            <td>I</td>
                            <td className="bg-accent-3">am</td>
                            <td>not</td>
                            <td>old.</td>
                        </tr>
                        <tr>
                            <td>You, we, they</td>
                            <td className="bg-accent-3">are</td>
                            <td>not</td>
                            <td>old.</td>
                        </tr>
                        <tr>
                            <td>He, she, it</td>
                            <td className="bg-accent-3">is</td>
                            <td>not</td>
                            <td>old.</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">?</td>
                            <td className="bg-accent-3">Am</td>
                            <td>I</td>
                            <td>&nbsp;</td>
                            <td>late?</td>
                        </tr>
                        <tr>
                            <td className="bg-accent-3">Are</td>
                            <td>you, we, they</td>
                            <td>&nbsp;</td>
                            <td>late?</td>
                        </tr>
                        <tr>
                            <td className="bg-accent-3">Is</td>
                            <td>he, she, it</td>
                            <td>&nbsp;</td>
                            <td>late?</td>
                        </tr>
                    </tbody>
                </Table>
                <p>From the above table, notice the following points...</p>
                <ul>
                    <li>
                        There is <strong>no auxiliary verb</strong>, even for
                        questions and negatives.
                    </li>
                    <li>
                        {" "}
                        The main verb (be) is conjugated in the Present Simple:{" "}
                        <em>am, are, is</em>
                    </li>
                    <li>
                        For negative sentences, we insert <strong>not</strong>{" "}
                        after the main verb.
                    </li>
                    <li>
                        For question sentences, we <strong>exchange</strong> the
                        subject and the main verb.
                    </li>
                </ul>

                <h2 id="use">How do we use the Present Simple tense?</h2>

                <p>We use the Present Simple to talk about:</p>
                <ul>
                    <li>general time (action verbs)</li>
                    <li>situations now (stative verbs)</li>
                    <li>
                        general time and situations now (verb <em>be</em>)
                    </li>
                </ul>

                <h3>Present Simple for general time</h3>
                <p>We use the Present Simple tense when:</p>
                <ul>
                    <li>the action is general</li>
                    <li>
                        the action happens all the time, or habitually, in the
                        past, present and future
                    </li>
                    <li>the action is not only happening now</li>
                    <li>the statement is always true</li>
                </ul>
                <Table responsive striped bordered className="">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="bg-example">
                                John <strong>drives</strong> a taxi.
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>
                                <strong>past</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>present</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>future</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div
                                    className="timeline"
                                    style={{ width: "95%" }}
                                ></div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                It is John's job to drive a taxi. He does it
                                every day. Past, present and future.
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <p>Look at these examples:</p>
                <ul>
                    <li>I live in New York.</li>
                    <li>The Moon goes round the Earth.</li>
                    <li>John drives a taxi.</li>
                    <li>He does not drive a bus.</li>
                    <li>We meet every Thursday.</li>
                    <li>We do not work at night.</li>
                    <li>Do you play football?</li>
                </ul>
                <h3>Present Simple for now</h3>
                <p>
                    For <a href="verbs-classification-main.htm">stative</a>{" "}
                    verbs, we can use the Present Simple to talk about{" "}
                    <strong>now</strong>. Stative verbs do not describe action.
                    They describe state, and are verbs such as:{" "}
                    <em>like, sound, belong to, need, seem</em>. We can use
                    these verbs with the Present Simple tense to talk about a
                    situation at the present time, not general.
                </p>
                <Table responsive striped bordered className="">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="bg-example">
                                I <strong>want</strong> a coffee.
                                <br />
                                That <strong>sounds</strong> interesting.
                                <br />
                                <strong>Do</strong> you <strong>need</strong>{" "}
                                some help?
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>
                                <strong>past</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>present</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>future</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div
                                    className="timeline"
                                    style={{ width: "20%" }}
                                ></div>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>The situation is now.</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Present Simple for general time and now</h3>
                <p>
                    The verb <strong>be</strong> is always special. It is a
                    stative verb, and we use it in the Present Simple tense to
                    talk about <strong>now</strong> situations <em>and</em>{" "}
                    about <strong>general</strong> situations. Look at these
                    examples of the verb <em>be</em> in the Present Simple tense
                    - some are <strong>general</strong> and some are{" "}
                    <strong>now</strong>:
                </p>
                <Table responsive striped bordered className="">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="bg-example">
                                I <strong>am</strong> not fat.
                                <br />
                                Why <strong>are</strong> you so beautiful?
                                <br />
                                Ram <strong>is</strong> tall.
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>
                                <strong>past</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>present</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>future</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div
                                    className="timeline"
                                    style={{ width: "95%" }}
                                ></div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                The situation is general. Past, present and
                                future.
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered className="">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="bg-example">
                                <strong>Am</strong> I right?
                                <br />
                                Tara <strong>is</strong> not at home.
                                <br />
                                We <strong>are</strong> hungry.
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>
                                <strong>past</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>present</strong>
                            </td>
                            <td style={{ width: "33%" }}>
                                <strong>future</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div
                                    className="timeline"
                                    style={{ width: "20%" }}
                                ></div>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>The situation is now.</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="ECtip">
                    This page shows the use of the Present Simple tense to talk
                    about <strong>now</strong> and about{" "}
                    <strong>general time</strong>. But note that there are other
                    uses for the Present Simple, for example in the{" "}
                    <Link href="https://www.englishclub.com/grammar/verbs-conditional-zero.htm">
                        <a>zero conditional</a>
                    </Link>{" "}
                    or to{" "}
                    <Link href="https://www.englishclub.com/grammar/verbs-m_future.htm">
                        <a> talk about the future</a>
                    </Link>
                    .
                </div>

                <nav>
                    <a
                        className="arrowNext"
                        href="verb-tenses_present-simple_quiz.htm"
                    >
                        Present Simple Quizs
                    </a>
                </nav>
            </Card.Body>
        </Card>
    );
}
