<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="fr_FR">
<context>
    <name>About</name>
    <message>
        <location filename="../about.ui" line="14"/>
        <source>About...</source>
        <translation>A propos ...</translation>
    </message>
    <message>
        <location filename="../about.ui" line="61"/>
        <source>The program is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</source>
        <translation>Le programme est fourni en l&apos;état SANS GARANTIE D&apos;AUCUNE SORTE, MEME LES GARANTIES DE CONCEPTION, MARCHANDE ET D&apos;ADAPTATION À UN USAGE PARTICULIER.</translation>
    </message>
    <message>
        <location filename="../about.ui" line="84"/>
        <source>Grbl Controller 4</source>
        <translation>Controleur Grbl 4</translation>
    </message>
</context>
<context>
    <name>GCode</name>
    <message>
        <location filename="../gcode.cpp" line="39"/>
        <source>Can&apos;t open COM port </source>
        <translation>Impossible d&apos;ouvrir le port série  </translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="44"/>
        <source>-Is hardware connected to USB?</source>
        <translation>-le périphérique est-il bien connecté sur un port USB ?</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="45"/>
        <source>-Is correct port chosen?</source>
        <translation>- le port choisi est-il correct ?</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="46"/>
        <source>-Does current user have sufficient permissions?</source>
        <translation>- L&apos;utilisateur a-t-il les droits d&apos;utilisation suffisants ?</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="167"/>
        <source>SENDING: 0x%02X (CTRL-X) to check presence of Grbl
</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="170"/>
        <location filename="../gcode.cpp" line="407"/>
        <source>Sending to port failed</source>
        <translation>L&apos;émission vers le port a échoué</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="312"/>
        <source>Got Grbl Version (Parsed:) %d.%d%c ($$=%d)
</source>
        <translation>Vous avez la version Grbl (analysée)  %d.%d%c ($$=%d)\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="329"/>
        <source>Port not available yet</source>
        <translation>Le port n&apos;est plus disponible</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="376"/>
        <source>Buffer size too small</source>
        <translation>Le tampon est trop petit</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="386"/>
        <source>SENDING[%d]: 0x%02X (CTRL-X)
</source>
        <translation>EMISSION[%d]: 0x%02X (CTRL-X)\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="388"/>
        <source>SENDING[%d]: %s
</source>
        <translation>EMISSION[%d]: %s\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="418"/>
        <source>WAITFOROK FAILED
</source>
        <translation>Echec lors de l&apos;attente de Ok </translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="424"/>
        <source>Wait for ok failed</source>
        <translation>L&apos;attente d&apos;un bon déroulement a échouée</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="515"/>
        <location filename="../gcode.cpp" line="709"/>
        <source>Error reading data from COM port
</source>
        <translation>Erreur de lecture des données dur le port série</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="537"/>
        <source>Unexpected: list is empty (o)!</source>
        <translation>Liste inattendue vide (o) </translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="542"/>
        <location filename="../gcode.cpp" line="556"/>
        <source>GOT[%d]:%s for %s
</source>
        <translation>Vous avez [%d]:%s pour %s\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="549"/>
        <source>Error?</source>
        <translation>Erreur non répertoriée</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="551"/>
        <source>Unexpected: list is empty (e)!</source>
        <translation>Liste inattendue vide (e) </translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="568"/>
        <location filename="../gcode.cpp" line="593"/>
        <location filename="../gcode.cpp" line="720"/>
        <source>GOT:%s
</source>
        <translation>Vous avez : %s\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="660"/>
        <source>Wait interrupted by user</source>
        <translation>Attente d&apos;interuption par l&apos;utilisateur</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="728"/>
        <source>Expecting Grbl version string. Unable to parse response.</source>
        <translation>Attente de la version Grbl, impossible d&apos;analyser la réponse</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="751"/>
        <source>No data from COM port after connect. Expecting Grbl version string.</source>
        <translation>Aucune données depuis le port série après la connexion, en attente de la veriosn Grnl</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="772"/>
        <source>Wait interrupted by user (startup)</source>
        <translation>Attente d&apos;interuption par l&apos;utilisateur (démarrage)</translation>
    </message>
    <message>
        <source>([a-zA-Z]+),MPos:</source>
        <translation type="obsolete">([a-zA-Z]+),PosM :</translation>
    </message>
    <message>
        <source>([a-zA-Z]+), MPos:</source>
        <translation type="obsolete">([a-zA-Z]+) ,PosM :</translation>
    </message>
    <message>
        <source>MPos:</source>
        <translation type="obsolete">PosM :</translation>
    </message>
    <message>
        <source>WPos:</source>
        <translation type="obsolete">PosT :</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="883"/>
        <source>Decoded: State:%s MPos: %f,%f,%f WPos: %f,%f,%f
</source>
        <translation>Décodage : Etat :%s MPos: %f,%f,%f WPos: %f,%f,%f
</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="890"/>
        <source>Decoded: State:%s MPos: %f,%f,%f,%f WPos: %f,%f,%f,%f
</source>
        <translation>Décodage : Etat :%s MPos: %f,%f,%f,%f WPos: %f,%f,%f,%f
</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="907"/>
        <source>Error decoding position data!
</source>
        <translation>Erreur de décodage des données de position\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="941"/>
        <source>GOT-TE:%s
</source>
        <translation>Vous avez -TE :%s\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="964"/>
        <source>Sending file &apos;%1&apos;</source>
        <translation>Emission du fichier &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1117"/>
        <source>Gave up waiting for OK
</source>
        <translation>Fin d&apos;attent Ok\n</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1136"/>
        <source>Code sent successfully with %1 error(s):</source>
        <translation>Code émis correctement avec %1 erreur(s)</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1148"/>
        <source>Code sent successfully with no errors.</source>
        <translation>Code émis correctement sans erreur</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1155"/>
        <source>Filtered %1 commands:</source>
        <translation>Commande filtrée %1</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1168"/>
        <source>Process interrupted.</source>
        <translation>Processus interrompu</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1200"/>
        <source>Removed unsupported command &apos;%1&apos; part of &apos;%2&apos;</source>
        <translation>Suppression de la commande &apos;%1&apos; portion de &apos;%2 ( non supprortée)</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1216"/>
        <source>Removed unsupported G command &apos;%1&apos;</source>
        <translation>Suppression de la commande G  &apos;%1&apos;  non supprortée</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1229"/>
        <source>Removed unsupported M command &apos;%1&apos;</source>
        <translation>Suppression de la commande M  &apos;%1&apos;  non supprortée</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1247"/>
        <source>Removed unsupported command &apos;%1&apos;</source>
        <translation>Suppression de la commande &apos;%1&apos;  non supprortée</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1380"/>
        <source>Unable to remove enough decimal places for command (will be truncated): %s</source>
        <translation>Impossible de supprimer assez de décimales pour la commande (sera tronqué) %s</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1385"/>
        <source>Error, insufficent reduction &apos;%1&apos;</source>
        <translation>Erreur : réduction insuffisante  &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1387"/>
        <source>Precision reduced &apos;%1&apos;</source>
        <translation>Précision réduite  &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1583"/>
        <source>Z-Rate Limit: [%1]=&gt;[%2]</source>
        <translation>Limite de vitesse Z  [%1]=&gt;[%2]</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1588"/>
        <source>Z-Rate Limit: [%1]=&gt;[%2,%3]</source>
        <translation>Limite de vitesse Z :  [%1]=&gt;[%2,%3]</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1634"/>
        <source>XY-Rate Limit FIX: [%1]=&gt;[%2]</source>
        <translation>Correction de la limite de vitesse XY : [%1]=&gt;[%2]</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1690"/>
        <source>Bad command: %1</source>
        <translation>Commande erronée : %1</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1791"/>
        <source>Options specify use mm but Grbl parser set for inches. Fixing.</source>
        <translation>Vous utiliser les mm alors que l&apos;analyse indique des pouces. Corriger</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1796"/>
        <source>Options specify use inches but Grbl parser set for mm. Fixing.</source>
        <translation>Vous devez utiliser les pouces alors que l&apos;analyse indique des mm. Corriger</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1810"/>
        <source>Options specify use mm but Grbl reporting set for inches. Fixing.</source>
        <translation>Vous utiliser les mm alors que Grbl donne despouces. Corriger</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1815"/>
        <source>Options specify use inches but Grbl reporting set for mm. Fixing.</source>
        <translation>Vous utiliser les pouces alors que Grbl donne des mm. Corriger</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1851"/>
        <location filename="../gcode.cpp" line="1852"/>
        <source>(mm)</source>
        <translation>(mm)</translation>
    </message>
    <message>
        <location filename="../gcode.cpp" line="1856"/>
        <location filename="../gcode.cpp" line="1857"/>
        <source>(in)</source>
        <translation>(pouce)</translation>
    </message>
</context>
<context>
    <name>GrblDialog</name>
    <message>
        <location filename="../grbldialog.ui" line="20"/>
        <source>Grbl Settings</source>
        <translation>Configuration GRBL</translation>
    </message>
    <message>
        <location filename="../grbldialog.ui" line="32"/>
        <source>Apply</source>
        <translation>Appliquer</translation>
    </message>
    <message>
        <location filename="../grbldialog.ui" line="45"/>
        <source>Close</source>
        <translation>Fermer</translation>
    </message>
    <message>
        <location filename="../grbldialog.cpp" line="29"/>
        <source>Value</source>
        <translation>Valeur</translation>
    </message>
    <message>
        <location filename="../grbldialog.cpp" line="29"/>
        <source>Item</source>
        <translation>Elément</translation>
    </message>
</context>
<context>
    <name>Log4Qt::AppenderSkeleton</name>
    <message>
        <location filename="../log4qt/appenderskeleton.cpp" line="137"/>
        <source>Activation of appender &apos;%1&apos; that requires layout and has no layout set</source>
        <translation>Activation de  &apos;Appender&apos;  &apos;%1&apos;  lequel nécessite une mise en page  non réalisée ! </translation>
    </message>
    <message>
        <location filename="../log4qt/appenderskeleton.cpp" line="228"/>
        <source>Use of non activated appender &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/appenderskeleton.cpp" line="236"/>
        <source>Use of closed appender &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/appenderskeleton.cpp" line="244"/>
        <source>Use of appender &apos;%1&apos; that requires layout and has no layout set</source>
        <translation>Utiliser &apos;Appender&apos;  &apos;%1&apos;  lequel nécessite une mise en page  non réalisée ! </translation>
    </message>
</context>
<context>
    <name>Log4Qt::DailyRollingFileAppender</name>
    <message>
        <location filename="../log4qt/dailyrollingfileappender.cpp" line="148"/>
        <source>Use of appender &apos;%1&apos; without having a valid date pattern set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/dailyrollingfileappender.cpp" line="215"/>
        <source>The pattern &apos;%1&apos; does not specify a frequency for appender &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::Factory</name>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="262"/>
        <source>Cannot convert to type &apos;%1&apos; for property &apos;%2&apos; on object of class &apos;%3&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="375"/>
        <source>Unable to set property value on object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="381"/>
        <source>Invalid null object pointer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="390"/>
        <source>Invalid empty property name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="408"/>
        <source>Property &apos;%1&apos; does not exist in class &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/factory.cpp" line="421"/>
        <source>Property &apos;%1&apos; is not writable in class &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::FileAppender</name>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="131"/>
        <source>Activation of Appender &apos;%1&apos; that requires file and has no file set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="161"/>
        <source>Use of appender &apos;%1&apos; without open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="224"/>
        <source>Unable to write to file &apos;%1&apos; for appender &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="258"/>
        <source>Unable to open file &apos;%1&apos; for appender &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="276"/>
        <source>Unable to remove file &apos;%1&apos; for appender &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/fileappender.cpp" line="292"/>
        <source>Unable to rename file &apos;%1&apos; to &apos;%2&apos; for appender &apos;%3&apos;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::OptionConverter</name>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="103"/>
        <source>Missing closing bracket for opening bracket at %1. Invalid subsitution in value %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="151"/>
        <source>Invalid option string &apos;%1&apos; for a boolean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="207"/>
        <source>Invalid option string &apos;%1&apos; for a file size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="227"/>
        <source>Invalid option string &apos;%1&apos; for an integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="246"/>
        <source>Invalid option string &apos;%1&apos; for a level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/optionconverter.cpp" line="285"/>
        <source>Invalid option string &apos;%1&apos; for a target</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::PatternFormatter</name>
    <message>
        <location filename="../log4qt/helpers/patternformatter.cpp" line="535"/>
        <source>Found character &apos;%1&apos; where digit was expected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/patternformatter.cpp" line="620"/>
        <source>Option &apos;%1&apos; cannot be converted into an integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/helpers/patternformatter.cpp" line="628"/>
        <source>Option %1 isn&apos;t a positive integer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::PropertyConfigurator</name>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="146"/>
        <source>Unable to open property file &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="158"/>
        <source>Unable to read property file &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="370"/>
        <source>Missing appender definition for appender named &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="380"/>
        <source>Unable to create appender of class &apos;%1&apos; namd &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="428"/>
        <source>Missing layout definition for appender &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../log4qt/propertyconfigurator.cpp" line="438"/>
        <source>Unable to create layoput of class &apos;%1&apos; requested by appender &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Log4Qt::WriterAppender</name>
    <message>
        <location filename="../log4qt/writerappender.cpp" line="137"/>
        <source>Activation of Appender &apos;%1&apos; that requires writer and has no writer set</source>
        <translation>Activation de  &apos;Appender&apos;  &apos;%1&apos;  lequel nécessite un éditeur non configuré ! </translation>
    </message>
    <message>
        <location filename="../log4qt/writerappender.cpp" line="192"/>
        <source>Use of appender &apos;%1&apos; without a writer set</source>
        <translation>Utiliser &apos;Appender&apos;  &apos;%1&apos; sans éditeur configuré</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../mainwindow.ui" line="29"/>
        <source>Grbl Controller</source>
        <translation>Controleur Grbl</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="294"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="309"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="324"/>
        <source>Z</source>
        <translation>Z</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="374"/>
        <source>Send File</source>
        <translation>Envoi d&apos;un fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="392"/>
        <source>Begin</source>
        <translation>Démarrer</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="399"/>
        <source>Stop</source>
        <translation>Arrêter</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="419"/>
        <source>Choose file</source>
        <translation>Choisir un fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="451"/>
        <source>Runtime:</source>
        <translation>Exécution</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1421"/>
        <source>Manual GCode</source>
        <translation>Commande directe en GCode</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1436"/>
        <source>Command</source>
        <translation>Texte</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="503"/>
        <location filename="../mainwindow.cpp" line="21"/>
        <source>Open</source>
        <translation>Ouvrir</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="339"/>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="489"/>
        <source>GRBL
settings</source>
        <translation>Configuratiion
GRBL</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="534"/>
        <source>Port name</source>
        <translation>Nom du port</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="809"/>
        <source>Reset Control</source>
        <translation>Commande RAZ</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="824"/>
        <source>Soft Reset Grbl</source>
        <translation>RAZ logiciel de Grbl</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="831"/>
        <source>Unlock Grbl</source>
        <translation>Débloquer Grbl</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="851"/>
        <source>Machine Coordinates</source>
        <translation>Coordonnées machine</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="877"/>
        <source>Work Coordinates</source>
        <translation>Coordonnées de travail</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="903"/>
        <source>Last State:</source>
        <translation>Dernier état</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="937"/>
        <source>Zero Position</source>
        <translation>Position zéro</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="944"/>
        <source>Go Home</source>
        <translation>Aller position repos</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="964"/>
        <source>Axis Control</source>
        <translation>Commandes d&apos;axes</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1096"/>
        <source>Z Jog</source>
        <translation>pilote Z</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1135"/>
        <source>Step Size           </source>
        <translation>Valeur du pas</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1157"/>
        <source>Absolute coordinates after adjust</source>
        <translation>Coordonnées absolues après ajustement</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1164"/>
        <source>Spindle On</source>
        <translation>Départ broche</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1214"/>
        <location filename="../mainwindow.ui" line="1230"/>
        <source>0</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1273"/>
        <source>C Jog</source>
        <translation>pilote C</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1302"/>
        <source>Visualizer</source>
        <translation>Visualisateur</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1399"/>
        <source>Baud Rate</source>
        <translation>Vitesse du port</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1480"/>
        <source>&amp;Help</source>
        <translation>&amp;Aide</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1486"/>
        <source>&amp;Tools</source>
        <translation>&amp;Outils</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1492"/>
        <source>&amp;File</source>
        <translation>&amp;Fichiers</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1503"/>
        <source>&amp;About</source>
        <translation>&amp;A propos</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1508"/>
        <source>&amp;Options</source>
        <translation>&amp;Options</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="1513"/>
        <source>E&amp;xit</source>
        <translation>&amp;Quitter</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="22"/>
        <source>Close / Reset</source>
        <translation>Fermer / Raz</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="244"/>
        <source>You appear to have upgraded to the latest version of Grbl Controller. Please be aware that as of version 3.4 the default behavior of sending commands to Grbl has been changed to send them as fast as possible (Aggressive preload mode).

Your settings have been changed to enable this mode. Why? Because it provides the most optimal use of Grbl and greatly reduces the time to finish a typical job.

What does this mean to you? Arc commands will now run smoother and faster than before, which may cause your spindle to work slightly harder, so please run some tests first. Alternately, go to the Options dialog and manually disable Aggressive Preload</source>
        <translation>Vous semblez avoir la dernière version du contrôleur Grbl. Soyez conscient que depuis la version 3.4 le comportement par défaut de l&apos;envoi de commandes à Grbl a été modifié pour les envoyer aussi vite que possible (mode de précharge agressif). 

Vos paramètres ont été modifiés pour permettre ce mode. Pourquoi? Parce qu&apos;il permet une utilisation la plus optimale de Grbl et réduit considérablement le temps de terminer un travail typique. Qu&apos;est-ce que cela signifie pour vous ? Maintenant les commandes d&apos;arc vont être plus continues et plus rapides qu&apos;auparavant, ce qui peut amener votre broche à travailler un peu plus vite, s&apos;il vous plaît donc faire quelques tests en premier. Sinon, passez à la boîte de dialogue Options et désactiver manuellement la  précharge agressive</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="299"/>
        <source>Wish to &quot;zero position&quot; before beginning?</source>
        <translation>Voulez-vous allez en postion zéro avant de démarrer ?</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="384"/>
        <source>User clicked Port Open/Close</source>
        <translation>L&apos;utilisateur a cliqué Ouverture/Fermeture du port</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="482"/>
        <source>Resetting port to restart controller</source>
        <translation>L&apos;initilisation du port initialise le contrôleur</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="656"/>
        <source>Open File</source>
        <translation>Charger un fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="658"/>
        <source>NC (*.nc);;All Files (*.*)</source>
        <translation>NC (*.nc);;Tous fichiers (*.*)</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="1128"/>
        <source>Spindle On.</source>
        <translation>Marche broche</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="1133"/>
        <source>Spindle Off.</source>
        <translation>Arrêt broche</translation>
    </message>
</context>
<context>
    <name>Options</name>
    <message>
        <location filename="../options.ui" line="14"/>
        <source>Options</source>
        <translation>Options</translation>
    </message>
    <message>
        <location filename="../options.ui" line="42"/>
        <source>Invert Axis</source>
        <translation>Inverser les axes</translation>
    </message>
    <message>
        <location filename="../options.ui" line="57"/>
        <source>Z Axis</source>
        <translation>Axe Z</translation>
    </message>
    <message>
        <location filename="../options.ui" line="64"/>
        <source>Y Axis</source>
        <translation>Axe Y</translation>
    </message>
    <message>
        <location filename="../options.ui" line="71"/>
        <source>X Axis</source>
        <translation>Axe X</translation>
    </message>
    <message>
        <location filename="../options.ui" line="78"/>
        <source>C Axis</source>
        <translation>Axe C</translation>
    </message>
    <message>
        <location filename="../options.ui" line="95"/>
        <source>Seconds to Wait for Response</source>
        <translation>Secondes d&apos;attente lors d&apos;une réponse</translation>
    </message>
    <message>
        <location filename="../options.ui" line="127"/>
        <source>Z-Jog Rate (inches or mm/min)</source>
        <translation>Vitesse manuelle Z  (pouces ou mmm/min)</translation>
    </message>
    <message>
        <location filename="../options.ui" line="140"/>
        <source>Use millimeters when sending manual commands (v0.8c+ only)</source>
        <translation>Emission des commandes manuelles en millimètre (v0.8c+ seulement)</translation>
    </message>
    <message>
        <location filename="../options.ui" line="153"/>
        <source>Z Rate Limiting</source>
        <translation>Limitation de vitesse</translation>
    </message>
    <message>
        <location filename="../options.ui" line="168"/>
        <source>Limit Z Rate</source>
        <translation>Vitesse max Z</translation>
    </message>
    <message>
        <location filename="../options.ui" line="213"/>
        <source>Z-Rate Limit (inches or mm/min)</source>
        <translation>Vitesse limite Z (pouces ou mmm/min)</translation>
    </message>
    <message>
        <location filename="../options.ui" line="220"/>
        <source>XY Rate (inches or mm/min)</source>
        <translation>Vitesse XY (pouces ou mmm/min)</translation>
    </message>
    <message>
        <location filename="../options.ui" line="287"/>
        <source>Use aggressive preload strategy for Grbl</source>
        <translation>Utiliser une stratégie agressive de pré-chargement pour Grbl</translation>
    </message>
    <message>
        <location filename="../options.ui" line="294"/>
        <source>Write debugging log to home folder (requires restart)</source>
        <translation>Mise au point sauvée dans le répertoire d&apos;accueil (+ redémarrage)</translation>
    </message>
    <message>
        <location filename="../options.ui" line="310"/>
        <source>Command Filtering</source>
        <translation>Filtrage des commandes</translation>
    </message>
    <message>
        <location filename="../options.ui" line="322"/>
        <source>Filter file commands before sending</source>
        <translation>Fichier de filtrage des commandes avant l&apos;émission</translation>
    </message>
    <message>
        <location filename="../options.ui" line="335"/>
        <source>Selectively reduce precision for excessively long lines</source>
        <translation>Réduire la précision lors de longues lignes </translation>
    </message>
    <message>
        <location filename="../options.ui" line="351"/>
        <source>Grbl Line Buffer Size</source>
        <translation>Taille du tampon d&apos;entrée de Grbl</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../rs232.cpp" line="162"/>
        <source>Unexpected: Told to send %d bytes
</source>
        <translation>Inattendu : tenu d&apos;envooyer%d octets</translation>
    </message>
    <message>
        <location filename="../rs232.cpp" line="203"/>
        <source>Error writing to port. Write data lost!</source>
        <translation>Erreu d&apos;écriture sur le port. Les données à écrire sont perdues</translation>
    </message>
    <message>
        <location filename="../renderitemlist.cpp" line="156"/>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <location filename="../renderitemlist.cpp" line="156"/>
        <source> inches</source>
        <translation>pouces</translation>
    </message>
    <message>
        <location filename="../renderitemlist.cpp" line="158"/>
        <source>  (Width-X: </source>
        <translation>  (Larg-X: </translation>
    </message>
    <message>
        <location filename="../renderitemlist.cpp" line="159"/>
        <source>  Height-Y: </source>
        <translation>  Haut-Y: </translation>
    </message>
</context>
<context>
    <name>QextSerialPort</name>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="723"/>
        <source>No Error has occurred</source>
        <translation>Aucune erreur</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="725"/>
        <source>Invalid file descriptor (port was not opened correctly)</source>
        <translation>Descripteur de périphérique invalide (port mal ouvert)</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="727"/>
        <source>Unable to allocate memory tables (POSIX)</source>
        <translation>Impossible d&apos;allouer les tables en mémoire (POSIX)</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="729"/>
        <source>Caught a non-blocked signal (POSIX)</source>
        <translation>Capture d&apos;un signal non-bloqué (POSIX)</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="731"/>
        <source>Operation timed out (POSIX)</source>
        <translation>Dépassement temporel (POSIX)</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="733"/>
        <source>The file opened by the port is not a valid device</source>
        <translation>Le ficheir ouvert pour le port n&apos;est pas un périphérique valide</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="735"/>
        <source>The port detected a break condition</source>
        <translation>Le port a détecté une condition d&apos;arrêt</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="737"/>
        <source>The port detected a framing error (usually caused by incorrect baud rate settings)</source>
        <translation>Le port a détecté une ereeur de trame (probablement due à une vitesse erronée)</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="739"/>
        <source>There was an I/O error while communicating with the port</source>
        <translation>Erreur d&apos;entrée/sortie lors d&apos;une commincation sur le port</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="741"/>
        <source>Character buffer overrun</source>
        <translation>Dépassement du tampon de caractères</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="743"/>
        <source>Receive buffer overflow</source>
        <translation>Dépassement du tampon de réception</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="745"/>
        <source>The port detected a parity error in the received data</source>
        <translation>Le port a détecté une erreur de parité lors de la réception de données</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="747"/>
        <source>Transmit buffer overflow</source>
        <translation>Dépassement du tampon d&apos;émission</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="749"/>
        <source>General read operation failure</source>
        <translation>Echec d&apos;une opération de lecture</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="751"/>
        <source>General write operation failure</source>
        <translation>Echec d&apos;une opération d&apos;écriture</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="753"/>
        <source>The %1 file doesn&apos;t exists</source>
        <translation>Le fichier %1 n&apos;existe pas</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="755"/>
        <source>Permission denied</source>
        <translation>Non autorisé</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="757"/>
        <source>Device is already locked</source>
        <translation>Périphérique déjà bloqué</translation>
    </message>
    <message>
        <location filename="../QextSerialPort/qextserialport.cpp" line="759"/>
        <source>Unknown error: %1</source>
        <translation>Erreur non répertoriée : %1</translation>
    </message>
</context>
</TS>